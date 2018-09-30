name := """crypto-tracker"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala).settings(
  watchSources ++= (baseDirectory.value / "public/ui" ** "*").get
)

fork in run := true

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.12.6"

libraryDependencies ++= Seq(
  guice,
  ws,
  ehcache,
  "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test,
  "com.github.tomakehurst" % "wiremock-standalone" % "2.18.0" % Test
)

javaOptions += "-Dconfig.file=conf/sensitive.conf"

javaOptions in Test += "-Dconfig.file=conf/application.test.conf"

mappings in Universal ++=
  (baseDirectory.value / "conf" * "*" get) map
    (x => x -> ("conf/" + x.getName))