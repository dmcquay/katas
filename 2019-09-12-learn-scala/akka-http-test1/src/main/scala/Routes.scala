import akka.actor.ActorSystem
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import akka.stream.ActorMaterializer
import swapi.SwapiClient.getPersonById

import scala.concurrent.ExecutionContext

object Routes {
  def buildRoute(implicit mat: ActorMaterializer, ec: ExecutionContext, as: ActorSystem): Route = pathPrefix("test") {
    path("hello") {
      get {
        complete(Hello.getHello)
      }
    } ~ path("swapi") {
      get {
        complete(getPersonById(1))
      }
    }
  }
}
