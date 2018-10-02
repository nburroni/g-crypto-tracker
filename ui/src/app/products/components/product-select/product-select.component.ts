import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {MatSelectChange} from "@angular/material";
import {Product} from "../../../shared/models/product";

@Component({
  selector: 'product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent implements OnInit {

  error: string;
  loading: boolean;

  productNames: string[];
  displayedProduct: Product;
  lowestPrice: number;
  highestPrice: number;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductList()
      .then(productList => this.productNames = productList.products)
      .catch(res => console.error(res.error.message));
  }

  productSelected(change: MatSelectChange) {
    this.reset();
    const product = change.value as string;
    this.productsService.getProductPrices(product)
      .then(res => {
        this.loading = false;
        this.displayedProduct = res.product;
        this.updatePrices()
      })
      .catch(res => {
        this.error = res.error.message;
        this.loading = false;
      });
  }

  private reset() {
    this.loading = true;
    this.error = undefined;
    this.displayedProduct = undefined;
  }

  updatePrices() {
    const prices = this.displayedProduct.prices;
    this.lowestPrice = prices.reduce((min, val) => val.price < min ? val.price : min, prices[0].price);
    this.highestPrice = prices.reduce((max, val) => val.price > max ? val.price : max, prices[0].price);
  }

}
