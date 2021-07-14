const uuid = require("uuid");
const http = require("http");
const express = require("express");
const app = express();

let gracefulShutdownRequested = false;
const reqs = {};

const handle = setInterval(() => {}, 10000);

app.get("/", async (req, res) => {
  console.log("request received");
  const reqId = uuid.v4();
  reqs[reqId] = req;
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("ok");
  delete reqs[reqId];
  console.log("request fulfilled");
  gracefulShutdownIfRequested();
});

const server = http.createServer(app);

server.listen(3000);

process.on("SIGTERM", () => {
  console.log("Received SIGTERM");
  console.log(`There are ${Object.values(reqs).length} in-flight requests`);
  gracefulShutdownRequested = true;
});

const gracefulShutdownIfRequested = () => {
  if (!gracefulShutdownRequested) return;
  if (Object.values(reqs).length > 0) {
    console.log(
      `There are ${
        Object.values(reqs).length
      } in-flight requests. Cannot shut down yet.`
    );
    return;
  }
  console.log("No more requests. Closing open connections.");
  clearInterval(handle);
  process.exit(0);
};
