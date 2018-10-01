package services

import connectors.MoneedaAPIConnector
import domain.{Exchange, ExchangePrice, Product}
import dto.moneeda
import dto.products.{ProductPricesResponse, SharedProductsResponse}
import javax.inject.{Inject, Singleton}
import play.api.Configuration

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ProductsService @Inject()(moneedaAPIConnector: MoneedaAPIConnector, config: Configuration, implicit val ec: ExecutionContext) {

  private val exchangeNames = config.get[Seq[String]]("exchange.scope")

  def getAllSharedProducts: Future[SharedProductsResponse] = {
    val eventualProducts = Future sequence(exchangeNames map this.moneedaAPIConnector.getProductsForExchange)
    eventualProducts map { exchangeProds =>
      val intersectingProducts = intersection(exchangeProds)
      SharedProductsResponse(intersectingProducts map (_.id))
    }
  }

  def getProductPrices(product: String): Future[Option[ProductPricesResponse]] = {
    val eventualTickers: Future[Option[Seq[ExchangePrice]]] = Future sequence(
      exchangeNames map { exchange =>
        this.moneedaAPIConnector.getTickerForProduct(exchange, product) map { tickerOpt =>
          tickerOpt.map(ticker => ExchangePrice(ticker.price, Exchange(exchange)))
        }
      }
    ) map { list =>
      if (list forall (_.isDefined)) Some(list.flatten)
      else None
    }

    eventualTickers map { pricesOpt =>
      pricesOpt map { prices =>
        ProductPricesResponse(Product(product, prices.toList))
      }
    }
  }

  private def intersection[T](seq: Seq[List[T]]): List[T] = seq reduceLeft (_ intersect _)

}
