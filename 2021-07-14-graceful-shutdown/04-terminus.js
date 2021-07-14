const http = require("http");
const express = require("express");
const { createTerminus } = require("@godaddy/terminus");

const app = express();

const handle = setInterval(() => {}, 10000);

app.get("/one", async (req, res) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("one");
});

app.get("/two", async (req, res) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("two");
});

const server = http.createServer(app);

server.listen(3000);

createTerminus(server, {
  timeout: 60_000, // [optional = 1000] number of milliseconds before forceful exiting

  // health check options
  healthChecks: {
    "/healthcheck": () => {}, // a function accepting a state and returning a promise indicating service health
  },

  beforeShutdown: () => console.log("beforeShutdown"), // [optional] called before the HTTP server starts its shutdown
  onSignal: async () => {
    console.log("closing fake connection");
    await new Promise((r) => setTimeout(r, 2_000));
    clearTimeout(handle);
    console.log("done closing fake connection");
  },
  onShutdown: () => console.log("exiting"), // [optional] called right before exiting
  onSendFailureDuringShutdown: () => console.log("sending 503"), // [optional] called before sending each 503 during shutdowns

  // both
  logger: (...args) => console.log("Error during shutdown", args), // [optional] logger function to be called with errors. Example logger call: ('error happened during shutdown', error). See terminus.js for more details.
});
