package swapi

import akka.actor.ActorSystem
import akka.stream.ActorMaterializer
import org.scalatest.{AsyncWordSpec, Matchers}

class SwapiClientSpec extends AsyncWordSpec with Matchers {
  // TODO: this seems bad to create a new ActorSystem, but if I comment it out then the
  // ActorMaterizer has an unmet implicit as well. Also, should I be creating an
  // ActorMaterializer?
  implicit val system: ActorSystem = ActorSystem("helloworld")
  implicit val materializer: ActorMaterializer = ActorMaterializer()

  val lukePayload = "{\"name\":\"Luke Skywalker\",\"height\":\"172\",\"mass\":\"77\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"19BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/30/\"],\"starships\":[\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-09T13:50:51.644000Z\",\"edited\":\"2014-12-20T21:17:56.891000Z\",\"url\":\"https://swapi.co/api/people/1/\"}"

  "getPersonById" when {
    "id is 1" should {
      "return the json data for luke skywalker" in {
        val expectedResult = lukePayload
        val personFuture = SwapiClient.getPersonById(1)
        personFuture map { person => person shouldEqual expectedResult }
      }
    }
  }

  "getPersonByIdCached" when {
    "id is 1 and value is not cached" should {
      "return the json data for luke skywalker as a cache miss" in {
        val expectedResult = CachedApiResponseEnvelope(jsonData = lukePayload, cacheHit = false)
        val personFuture = SwapiClient.getPersonByIdWithCache(1)
        personFuture map { person => person shouldEqual expectedResult }
      }
    }

    "id is 1 and called twice" should {
      "return the json data for luke skywalker as a cache hit" in {
        val expectedResult = CachedApiResponseEnvelope(jsonData = lukePayload, cacheHit = true)
        val personFuture = SwapiClient.getPersonByIdWithCache(1)
          .flatMap(_ => SwapiClient.getPersonByIdWithCache(1))
        personFuture map { person => person shouldEqual expectedResult }
      }
    }
  }
}
