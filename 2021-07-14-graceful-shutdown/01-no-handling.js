const http = require("http");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("ok");
});

const server = http.createServer(app);

server.listen(3000);
