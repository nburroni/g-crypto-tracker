import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductListResponse} from "../models/product-list-response";
import {ProductPricesResponse} from "../models/product-prices-response";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductList(): Promise<ProductListResponse> {
    return this.http.get(`/products`)
      .toPromise()
      .then((res: any) => res as ProductListResponse)
  }

  getProductPrices(product: String): Promise<ProductPricesResponse> {
    return this.http.get(`/products/${product}/prices`)
      .toPromise()
      .then((res: any) => res as ProductPricesResponse)
  }

}
