import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProductInterface } from 'src/app/Interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productId: string;
  public productDetail = <IProductInterface>{};
  public mode: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.productId = params['id'];
      if (this.productId !== undefined) {
        this.getProductDetailById(this.productId);
        this.mode = 'Edit';
      } else {
        // this.productId = null;
        this.productDetail['id'] = 0;
        this.mode = 'Add';
      }
    });
  }

  getProductDetailById(id) {
    this.productDetail = this.productService.getProductById(parseInt(id));
  }
  changeListener($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      let image = myReader.result;
      this.productDetail.image = image.toString();
    }
    myReader.readAsDataURL(file);
  }

  onProductSubmitForm(form) {
    if (form.valid) {
      this.productService.updateProductById(this.productDetail);
      this.router.navigate(['/product-list']);
    } else {

    }
  }
  onClickCancel() {
    this.router.navigate(['/product-list']);
  }

}
