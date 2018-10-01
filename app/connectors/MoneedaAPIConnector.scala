package connectors

import common.JsonUtil.implicits.{moneedaProductResponseReads, moneedaTickerResponseReads}
import dto.moneeda.MoneedaProductResponse
import javax.inject.{Inject, Singleton}
import play.api.{Configuration, Logger}
import play.api.libs.ws.{WSClient, WSResponse}

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class MoneedaAPIConnector @Inject()(config: Configuration, ws: WSClient, implicit val ec: ExecutionContext) {

  private val logger = Logger(this.getClass)
  private val apiConfig = config.get[Configuration]("moneeda.api")
  private val authHeaderValue = {
    val authToken = apiConfig.get[String]("auth.token")
    s"Bearer $authToken"
  }

  private def productsUrl(exchange: String) =
    apiConfig.get[String]("products.url").format(exchange)

  def getProductsForExchange(exchange: String): Future[List[MoneedaProductResponse]] = {
    val url = productsUrl(exchange)
    val eventualResponse: Future[WSResponse] = ws.url(url)
      .withHttpHeaders(
        "Authorization" -> authHeaderValue,
        "Accept" -> "application/json"
      )
      .get()

    eventualResponse map { response =>
      response.json.as[List[MoneedaProductResponse]]
    }
  }

  def getTickerForProduct = ???

}
