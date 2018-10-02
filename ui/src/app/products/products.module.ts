import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSelectComponent } from './components/product-select/product-select.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductPriceCardComponent } from './components/product-price-card/product-price-card.component';
import {MatCardModule, MatGridListModule, MatSelectModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
  ],
  declarations: [
    ProductSelectComponent,
    ProductInfoComponent,
    ProductPriceCardComponent,
  ],
  exports: [
    ProductSelectComponent,
  ]
})
export class ProductsModule { }
