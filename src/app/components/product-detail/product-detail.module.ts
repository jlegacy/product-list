import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailRoutingModule
  ],
  declarations: [ProductDetailComponent],
  providers: [
    ProductService
  ]
})
export class ProductDetailModule { }
