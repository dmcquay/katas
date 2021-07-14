const http = require("http");
const express = require("express");
const {
  beforeMiddleware,
  afterMiddleware,
  onShutdownSignal,
  setServer,
} = require("./util/03-middleware");

const app = express();

const handle = setInterval(() => {}, 10000);

app.use(beforeMiddleware);

app.get("/one", async (req, res, next) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("one");
  next(); // MUST CALL next() IN ALL ROUTE HANDLERS. WEIRD? WHAT IF APOLLO DOESN'T DO THIS?
});

app.get("/two", async (req, res, next) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("two");
  next();
});

app.use(afterMiddleware);

const server = http.createServer(app);

setServer(server);

server.listen(3000);

onShutdownSignal(async () => {
  console.log("closing fake connection");
  await new Promise((r) => setTimeout(r, 2_000));
  clearTimeout(handle);
  console.log("done closing fake connection");
});
