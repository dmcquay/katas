import scala.concurrent.{ExecutionContext, Future}

object Hello {
    def getHello()(implicit ec: ExecutionContext):Future[String] = {
        val f = Future {
            Thread.sleep(500)
            "Hello Future World"
        }
        f.map(x => x.toUpperCase())
    }
}