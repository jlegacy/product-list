import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Select, Store } from '@ngxs/store';
import { ProductStore } from 'src/app/store/product-store.state';
import { Observable } from 'rxjs';
import { IProductInterface } from 'src/app/Interfaces/product.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

    @Select(ProductStore.getProductList)
    public productList$: Observable<Array<IProductInterface>>;

    public products: Array<IProductInterface>;
    constructor( private router: Router, private productService: ProductService, private store: Store, ) { }
    
    onClickEditProductDetail(id) {
        this.router.navigate(['/product-detail'], {queryParams: {id: id}});
    }
    
    onClickAddProduct() {
        this.router.navigate(['/product-detail']);
    }
    
    onClickProductDelete(id) {
        this.productService.deleteProductDetail(id);
    }

}
