const http = require("http");
const express = require("express");

const app = express();

const handle = setInterval(() => {}, 10000);

app.get("/one", async (req, res) => {
  await new Promise((r) => setTimeout(r, 5_000));
  res.send("one");
});

const server = http.createServer(app);
server.keepAliveTimeout = 10_000;

server.listen(3000);

let shutdownRequested = false;

let inFlightRequestCount = 0;
server.on("request", (req, res) => {
  inFlightRequestCount++;
  console.log("request");
  res.on("finish", () => {
    console.log("response sent");
    inFlightRequestCount--;
    closeConnectionsIfNecessary();
  });
});

const connections = new Set();
server.on("connection", (conn) => {
  connections.add(conn);
  conn.on("close", () => {
    connections.delete(conn);
  });
});

// TODO: do the same thing for secure connections, though that may not be necessary sometimes because
// often we terminate SSL at some other layer like a load balancer.

const closeConnectionsIfNecessary = async () => {
  if (shutdownRequested && inFlightRequestCount === 0 && connections.size > 0) {
    console.log("it looks like there are some idle connections to destroy");
    for (let conn of connections) {
      conn.destroy();
    }
  }
};

const initiateGracefulShutdown = () => {
  shutdownRequested = true;
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
