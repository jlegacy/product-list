import { Injectable } from '@angular/core';
import { IProductInterface } from '../Interfaces/product.interface';
import { Store } from '@ngxs/store';
import { InsertProduct, UpdateProduct, RemoveProduct } from '../store/product-store.actions';
import { ProductStore } from '../store/product-store.state';

@Injectable()
export class ProductService {

    public products: Array<IProductInterface>;
    constructor(private store: Store) { }

    getProductById(id: number): IProductInterface {
        const prodList = this.store.selectSnapshot(ProductStore.getProductList);
        return prodList
            .filter(product => product.id === id)
            .pop();
    }

    updateProductById(product): IProductInterface {
        if (product.id === 0) {
            const prodList = this.store.selectSnapshot(ProductStore.getProductList);
            product.id = prodList.length > 0 ? prodList[prodList.length - 1].id + 1 : 1;
            this.store.dispatch(new InsertProduct(product));
        } else {
            this.store.dispatch(new UpdateProduct(product)); 
        }
        return product;
    }

    deleteProductDetail(id) {
        this.store.dispatch(new RemoveProduct(id));
    };
}
