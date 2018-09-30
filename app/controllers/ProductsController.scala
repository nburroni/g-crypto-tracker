package controllers

import javax.inject._
import play.api.libs.json.Json
import play.api.mvc._
import services.ProductsService

import scala.concurrent.ExecutionContext

@Singleton
class ProductsController @Inject()(productsService: ProductsService,
                                   cc: ControllerComponents,
                                   implicit val ec: ExecutionContext) extends AbstractController(cc) {

  def getAllSharedProducts = ???

  def getProductPrices(product: String) = ???

}
