import {Component, Input} from '@angular/core';
import {Product} from "../../../shared/models/product";
import {ExchangePrice} from "../../../shared/models/exchange-price";

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {

  @Input() product: Product;
  @Input() lowestPrice: number;
  @Input() highestPrice: number;

  constructor() { }

  getClassFor(exchangePrice: ExchangePrice) {
    if (exchangePrice.price === this.lowestPrice)
      return "red";
    else if (exchangePrice.price === this.highestPrice)
      return "green";
    else return "";
  }
}
