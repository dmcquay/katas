import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Route
import org.scalatest.{Matchers, WordSpec}
import akka.http.scaladsl.testkit.ScalatestRouteTest

class RoutesSpec extends WordSpec with Matchers with ScalatestRouteTest {
  "The service" should {

    "return a greeting for GET requests to the hello path" in {
      Get("/test/hello") ~> Routes.buildRoute ~> check {
        responseAs[String] shouldEqual "HELLO FUTURE WORLD"
      }
    }

    "leave GET requests to other paths unhandled" in {
      Get("/kermit") ~> Routes.buildRoute ~> check {
        handled shouldBe false
      }
    }

    "return a MethodNotAllowed error for PUT requests to the hello path" in {
      Put("/test/hello") ~> Route.seal(Routes.buildRoute) ~> check {
        status shouldEqual StatusCodes.MethodNotAllowed
        responseAs[String] shouldEqual "HTTP method not allowed, supported methods: GET"
      }
    }
  }
}
