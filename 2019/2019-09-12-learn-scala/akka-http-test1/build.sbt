name := "akka-http-test1"

version := "0.1"

scalaVersion := "2.12.6"

lazy val root = (project in file("."))
  .settings(
    name := "akka-http-test1",

    libraryDependencies ++= Seq(
      "com.typesafe.akka" %% "akka-actor" % "2.5.13",
      "com.typesafe.akka" %% "akka-testkit" % "2.5.13" % Test,
      "com.typesafe.akka" %% "akka-stream" % "2.5.13",
      "com.typesafe.akka" %% "akka-stream-testkit" % "2.5.13" % Test,
      "com.typesafe.akka" %% "akka-http" % "10.1.3",
      "com.typesafe.akka" %% "akka-http-testkit" % "10.1.3" % Test,
      "org.scalatest" %% "scalatest" % "3.0.5" % Test
    )
  )