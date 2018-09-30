package dto

import domain.Product

object products {

  case class SharedProductsResponse(products: List[String])

  case class ProductPricesResponse(product: Product)

}
