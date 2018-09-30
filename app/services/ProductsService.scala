package services

import connectors.MoneedaAPIConnector
import javax.inject.{Inject, Singleton}

import scala.concurrent.ExecutionContext

@Singleton
class ProductsService @Inject()(moneedaAPIConnector: MoneedaAPIConnector, implicit val ec: ExecutionContext) {

}
