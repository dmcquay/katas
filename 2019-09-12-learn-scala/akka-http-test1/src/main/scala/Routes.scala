import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.http.scaladsl.model._
import akka.util.ByteString

import scala.concurrent.{ExecutionContext, Future}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route

import swapi.SwapiClient.getPersonById

object Routes {
  def getResponseBodyAsString(response: HttpResponse)(implicit mat: ActorMaterializer, ec: ExecutionContext): Future[String] = {
    response.entity.dataBytes.runFold(ByteString(""))(_ ++ _).map(_.utf8String)
  }

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
