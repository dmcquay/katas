const http = require("http");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.status(200, "OK");
  res.flushHeaders();
  res.write("early chunk");
  await new Promise((r) => setTimeout(r, 10_000));
  res.end("finished");
});

const server = http.createServer(app);

server.listen(3000);
