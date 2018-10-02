import {Component, Input} from '@angular/core';
import {Product} from "../../../shared/models/product";

@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {

  @Input() product: Product;

  constructor() { }

}
