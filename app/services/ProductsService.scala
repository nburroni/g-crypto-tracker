package services

import connectors.MoneedaAPIConnector
import dto.moneeda
import dto.products.SharedProductsResponse
import javax.inject.{Inject, Singleton}
import play.api.Configuration

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ProductsService @Inject()(moneedaAPIConnector: MoneedaAPIConnector, config: Configuration, implicit val ec: ExecutionContext) {

  def getAllSharedProducts: Future[SharedProductsResponse] = {
    val exchangeNames = config.get[Seq[String]]("exchange.scope")
    val eventualProducts = Future sequence(exchangeNames map this.moneedaAPIConnector.getProductsForExchange)
    eventualProducts map { exchangeProds =>
      val intersectingProducts = intersection(exchangeProds)
      SharedProductsResponse(intersectingProducts map (_.id))
    }
  }

  private def intersection[T](seq: Seq[List[T]]): List[T] = seq reduceLeft (_ intersect _)

}
