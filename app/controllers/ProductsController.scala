package controllers

import common.JsonUtil.implicits.{sharedProductsResponseWrites, productPricesResponseWrites}
import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import services.ProductsService

import scala.concurrent.ExecutionContext

@Singleton
class ProductsController @Inject()(productsService: ProductsService,
                                   cc: ControllerComponents)
                                  (implicit val ec: ExecutionContext) extends AbstractController(cc) {

  def getAllSharedProducts: Action[AnyContent] = Action.async {
    this.productsService.getAllSharedProducts map { products =>
      Ok(Json.toJson(products))
    }
  }

  def getProductPrices(product: String): Action[AnyContent] = Action.async {
    this.productsService.getProductPrices(product) map {
      case Some(prices) =>
        Ok(Json.toJson(prices))
      case None =>
        val res = Map("message" -> "Product not available in all markets")
        InternalServerError(Json.toJson(res))
    }
  }

}
