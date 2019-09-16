import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.util.ByteString

import scala.concurrent.{Await, Future}
import scala.util.{Failure, Success}

object Server extends App {
    val host = "0.0.0.0"
    val port = 9000
    
    implicit val system: ActorSystem = ActorSystem("helloworld")
    implicit val materializer: ActorMaterializer = ActorMaterializer()
    import system.dispatcher

    import akka.http.scaladsl.server.Directives._

    def getResponseBodyAsString(response: HttpResponse): Future[String] = {
        response.entity.dataBytes.runFold(ByteString(""))(_ ++ _).map(_.utf8String)
    }

    def route = pathPrefix("test") {
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

    val binding = Http().bindAndHandle(route, host, port)
    binding.onComplete {
        case Success(_) => println("Success!")
        case Failure(error) => println(s"Failed: ${error.getMessage}")
    }

    import scala.concurrent.duration._
    Await.result(binding, 3.seconds)
}