package swapi

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.util.ByteString

import scala.concurrent.{ExecutionContext, Future}
import cache.{MemoryCache, CacheResult}

case class CachedApiResponseEnvelope(jsonData: String, cacheHit: Boolean)

object SwapiClient {
  val cache = new MemoryCache

  private def getResponseBodyAsString(response: HttpResponse)(implicit mat: ActorMaterializer, ec: ExecutionContext): Future[String] = {
    response.entity.dataBytes.runFold(ByteString(""))(_ ++ _).map(_.utf8String)
  }

  def getPersonById(id: Int)(implicit mat: ActorMaterializer, ec: ExecutionContext, as: ActorSystem): Future[String] = {
    val uri = s"https://swapi.co/api/people/${id}/"

    val request = HttpRequest(uri = uri)
    val responseFuture: Future[HttpResponse] = Http().singleRequest(request)
    responseFuture
      .flatMap(getResponseBodyAsString)
  }

  def getPersonByIdWithCache(id: Int)(implicit mat: ActorMaterializer, ec: ExecutionContext, as: ActorSystem): Future[CachedApiResponseEnvelope] = {
    val cacheKey = s"person|${id}"
    cache.get(cacheKey).flatMap {
      case Some(cacheResult: CacheResult) => Future.successful(CachedApiResponseEnvelope(jsonData = cacheResult.value, cacheHit = true))
      case None => getPersonById(id).flatMap(p => cache.set(cacheKey, p, 10000).map(x => p)).map(p => CachedApiResponseEnvelope(jsonData = p, cacheHit = false))
    }
  }
}
