import {Component, Input} from '@angular/core';
import {ExchangePrice} from "../../../shared/models/exchange-price";

@Component({
  selector: 'product-price-card',
  templateUrl: './product-price-card.component.html',
  styleUrls: ['./product-price-card.component.scss']
})
export class ProductPriceCardComponent {

  @Input() exchangePrice: ExchangePrice;
  @Input() contentColor: string;

  constructor() { }

}
