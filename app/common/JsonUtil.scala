package common

import domain._
import dto.moneeda._
import dto.products._
import play.api.libs.json._

object JsonUtil {

  object implicits {

    implicit val exchangeWrites: Writes[Exchange] = Json.writes[Exchange]
    implicit val exchangePriceWrites: Writes[ExchangePrice] = Json.writes[ExchangePrice]
    implicit val productWrites: Writes[Product] = Json.writes[Product]

    implicit val sharedProductsResponseWrites: Writes[SharedProductsResponse] = Json.writes[SharedProductsResponse]
    implicit val productPricesResponseWrites: Writes[ProductPricesResponse] = Json.writes[ProductPricesResponse]

    implicit val moneedaProductResponseReads: Reads[MoneedaProductResponse] = Json.reads[MoneedaProductResponse]
    implicit val moneedaTickerResponseReads: Reads[MoneedaTickerResponse] = Json.reads[MoneedaTickerResponse]

  }

}
