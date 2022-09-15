package cache

import org.scalatest.{AsyncFlatSpec, Matchers}

import scala.concurrent.{Await, Future}
import scala.concurrent.duration._

class MemoryCacheSpec extends AsyncFlatSpec with Matchers {
  def sleepFuture(millis: Int): Future[Unit] = {
    Future {
      Thread.sleep(millis)
    }
  }

  "when non-expired value exists" should "return the value indicating not expired" in {
    val cache = new MemoryCache()
    val resultFuture = cache.set("foo", "bar", 10000).flatMap(_ => cache.get("foo"))
    resultFuture map { value => value shouldBe Some(CacheResult("bar", false)) }
  }

  "when non-expired value exists (await)" should "return the value indicating not expired" in {
    val cache = new MemoryCache()
    Await.result(cache.set("foo", "bar", 10000), 1.second)
    val value = Await.result(cache.get("foo"), 1.second)
    assert(value == Some(CacheResult("bar", false)))
  }

  "when the value does not exist" should "return Nothing" in {
    val cache = new MemoryCache()
    val resultFuture = cache.get("foo")
    resultFuture map { value => assert(value == None) }
  }

  "when the value is expired" should "return the value indicating that it is expired" in {
    val cache = new MemoryCache()
    cache.set("foo", "bar", 10)
      .flatMap(x => sleepFuture(11))
      .flatMap(x => cache.get("foo"))
      .map(value => assert(value == Some(CacheResult("bar", true))))
  }

  "when the value is expired (for comp)" should "return the value indicating that it is expired" in {
    val cache = new MemoryCache()

    val valueFuture = for {
      _ <- cache.set("foo", "bar", 10)
      _ <- sleepFuture(11)
      cacheGetResult <- cache.get("foo")
    } yield cacheGetResult

    valueFuture.map(value => assert(value == Some(CacheResult("bar", true))))
  }

  "when the value is expired (await)" should "return the value indicating that it is expired" in {
    val cache = new MemoryCache()
    Await.result(cache.set("foo", "bar", 10), 1.second)
    Thread.sleep(11)
    val value = Await.result(cache.get("foo"), 1.second)
    assert(value == Some(CacheResult("bar", true)))
  }
}
