import akka.actor.ActorSystem
import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Route
import org.scalatest.{Matchers, WordSpec}
import akka.http.scaladsl.testkit.{RouteTestTimeout, ScalatestRouteTest}
import scala.concurrent.duration._

class RoutesSpec extends WordSpec with Matchers with ScalatestRouteTest {
  implicit def default(implicit system: ActorSystem) = RouteTestTimeout(5.seconds)

  "The service" should {

    "return a greeting for GET requests to the hello path" in {
      Get("/test/hello") ~> Routes.buildRoute ~> check {
        responseAs[String] shouldEqual "HELLO FUTURE WORLD"
      }
    }

    "return luke skywalker's data for GET requests to the swapi path" in {
      Get("/test/swapi") ~> Routes.buildRoute ~> check {
        responseAs[String] shouldEqual "{\"name\":\"Luke Skywalker\",\"height\":\"172\",\"mass\":\"77\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"19BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/30/\"],\"starships\":[\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-09T13:50:51.644000Z\",\"edited\":\"2014-12-20T21:17:56.891000Z\",\"url\":\"https://swapi.co/api/people/1/\"}"
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
