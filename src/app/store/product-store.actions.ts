

export class LoadProductList {
  static type = '[LoadProductList] Load product list';
  constructor(public data: any) {}
}

export class InsertProduct {
  static type = '[Insert Product] Insert Product';
  constructor(public data: any) {}
}

export class UpdateProduct {
  static type = '[Update Product] Update Product';
  constructor(public data: any) {}
}

export class RemoveProduct {
  static type = '[Remove Product] Remove Product';
  constructor(public id: any) {}
}
