import {ExchangePrice} from "./exchange-price";

export class Product {

  constructor(readonly name: string,
              readonly prices: ExchangePrice[]) {}

}
