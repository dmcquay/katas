const express = require("express");

const { rateLimit, identifyClientByToken } = require("./rate-limits");

const app = express();

app.use(rateLimit(1000, 10, identifyClientByToken));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen("3000", () => {
  console.log("http://localhost:3000");
});
