const http = require("http");
const express = require("express");

const app = express();

const handle = setInterval(function () {}, 10000);

app.use((req, res, next) => {
  res.set("Connection", "close");
  next();
});

app.get("/one", function (req, res) {
  new Promise((r) => setTimeout(r, 5000)).then(() => {
    res.send("one");
  })
});

const server = http.createServer(app);
// server.keepAliveTimeout = 10_000;

server.listen(3000);

const initiateGracefulShutdown = () => {
  console.log("shutting down gracefully. will not accept any more requests.");
  server.close((err) => {
    if (err) {
      console.log("Failed to close server", err.message);
    } else {
      console.log("Server shut down successfully. Closing open handles.");
      clearInterval(handle);
    }
  });
};

process.on("SIGTERM", initiateGracefulShutdown);
process.on("SIGINT", initiateGracefulShutdown);

// tested with node 10