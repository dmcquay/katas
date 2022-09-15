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


    def getResponseBodyAsString(response: HttpResponse): Future[String] = {
        response.entity.dataBytes.runFold(ByteString(""))(_ ++ _).map(_.utf8String)
    }

    val binding = Http().bindAndHandle(Routes.buildRoute, host, port)
    binding.onComplete {
        case Success(_) => println("http://localhost:9000/test/hello")
        case Failure(error) => println(s"Failed: ${error.getMessage}")
    }

    import scala.concurrent.duration._
    Await.result(binding, 3.seconds)
}