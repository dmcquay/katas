package cache

import scala.concurrent.Future

case class CacheResult(value: String, isExpired: Boolean)

case class CacheItem(value: String, expiresAt: Long)

trait CacheLike {
  def set(key: String, value: String, ttlMillis: Int): Future[Unit]
  def get(key: String): Future[Option[CacheResult]]
}
