import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {MatAutocompleteSelectedEvent, MatSelectChange} from "@angular/material";
import {Product} from "../../../shared/models/product";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";

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

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductList()
      .then(productList => this.productNames = productList.products)
      .catch(res => console.error(res.error.message));

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  productSelected(event: MatAutocompleteSelectedEvent) {
    this.reset();
    const product = event.option.value as string;
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

  updatePrices() {
    const prices = this.displayedProduct.prices;
    this.lowestPrice = prices.reduce((min, val) => val.price < min ? val.price : min, prices[0].price);
    this.highestPrice = prices.reduce((max, val) => val.price > max ? val.price : max, prices[0].price);
  }

  private reset() {
    this.loading = true;
    this.error = undefined;
    this.displayedProduct = undefined;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productNames.filter(option => option.toLowerCase().includes(filterValue));
  }

}
