package cache

import scala.concurrent.Future
import scala.collection.mutable.HashMap

class MemoryCache extends CacheLike {
  val store = new HashMap[String, CacheItem]

  override def set(key: String, value: String, ttlMillis: Int): Future[Unit] = {
    val item = CacheItem(value = value, expiresAt = System.currentTimeMillis + ttlMillis)
    store.put(key, item)
    Future.successful(Unit)
  }

  override def get(key: String): Future[Option[CacheResult]] = {
    store.get(key) match {
      case None => Future.successful(None)
      case Some(item) => Future.successful(Some(CacheResult(item.value, item.expiresAt < System.currentTimeMillis)))
    }
  }
}