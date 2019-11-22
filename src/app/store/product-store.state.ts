import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { LoadProductList as LoadProductList, InsertProduct, UpdateProduct, RemoveProduct } from './product-store.actions';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { IProductInterface } from '../Interfaces/product.interface';

interface ProductState {
  productList: Array<IProductInterface>;
}

@State<ProductState>({
  name: 'productList',
  defaults: {
    productList: [],
  }
})
export class ProductStore {

  constructor(private store: Store) { }

  @Selector()
  static getProductList(state: ProductState): Array<IProductInterface> {
    return state.productList; 
  }

  @Action(LoadProductList)
  productList(
    { patchState, dispatch }: StateContext<ProductState>,
    { data }: LoadProductList
  ) {
    patchState({ productList: data });
  }


  @Action(InsertProduct)
  insertProduct(ctx: StateContext<ProductState>, { data }: InsertProduct) {
    ctx.setState(
      patch({
        productList: append([data])
      })
    );
  }

  @Action(UpdateProduct)
  updateProduct(ctx: StateContext<ProductState>, { data }: UpdateProduct) {
    ctx.setState(
      patch({
        productList: updateItem(item => item['id'] === data.id, patch({ name: data.name, description: data.description, image: data.image }))
      })
    );
  }

  @Action(RemoveProduct)
  removeProduct(ctx: StateContext<ProductState>, { id }: RemoveProduct) {
    ctx.setState(
      patch({
        productList: removeItem(item => item['id'] === id)
      })
    );
  }
}




