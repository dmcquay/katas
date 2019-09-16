import org.scalatest.{AsyncFlatSpec, Matchers}

class HelloSpec extends AsyncFlatSpec with Matchers {

  def getFakeMessage(): String = "the message"

  "getFakeMessage" should "return the message" in {
    assert(getFakeMessage == "the message")
  }

  "The Hello object" should "eventually return HELLO FUTURE WORLD" in {
    val helloFuture = Hello.getHello()
    helloFuture map { greeting => assert(greeting == "HELLO FUTURE WORLD") }
  }
}
