import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.util.ByteString

import scala.concurrent.{ExecutionContext, Future}
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route

object Routes {
  def getResponseBodyAsString(response: HttpResponse)(implicit mat: ActorMaterializer, ec: ExecutionContext): Future[String] = {
    response.entity.dataBytes.runFold(ByteString(""))(_ ++ _).map(_.utf8String)
  }

  def buildRoute(implicit mat: ActorMaterializer, ec: ExecutionContext, as: ActorSystem): Route = pathPrefix("test") {
    path("hello") {
      get {
        val f2 = Hello.getHello()
        complete(f2)
      }
    } ~ path("swapi") {
      get {
        val uri = "https://swapi.co/api/people/1/"
        val request = HttpRequest(uri = uri)
        val responseFuture: Future[HttpResponse] = Http().singleRequest(request)
        val responseDataFuture = responseFuture.map(getResponseBodyAsString)
        complete(responseDataFuture)
      }
    }
  }
}
