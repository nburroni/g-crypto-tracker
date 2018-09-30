package connectors

import javax.inject.{Inject, Singleton}
import play.api.{Configuration, Logger}
import play.api.libs.ws.WSClient

import scala.concurrent.ExecutionContext

@Singleton
class MoneedaAPIConnector @Inject()(config: Configuration, ws: WSClient, implicit val ec: ExecutionContext) {

  private val logger = Logger(this.getClass)
  private val apiConfig = config.get[Configuration]("moneeda.api")

  def getProductsForExchange = ???

  def getTickerForProduct = ???

}
