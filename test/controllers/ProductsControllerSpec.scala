package controllers

import org.scalatestplus.play._
import org.scalatestplus.play.guice._
import play.api.test.Helpers._
import play.api.test._

/**
  *
  */
class ProductsControllerSpec extends PlaySpec with GuiceOneAppPerTest with Injecting {

  "GET /products" should {

    "render the appSummary resource from the router" in {
      val request = FakeRequest(GET, "/api/summary")
      val home = route(app, request).get

      status(home) mustBe OK
      contentType(home) mustBe Some("application/json")
      val resultJson = contentAsJson(home)
      resultJson.toString() mustBe """{"content":"Crypto Tracker"}"""
    }
  }
}
