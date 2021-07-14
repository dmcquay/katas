const http = require("http");
const express = require("express");
const { beforeMiddleware, afterMiddleware } = require("./util/03-middleware");

const app = express();

// TODO: add this back after I provide a hook to do stuff like this
// const handle = setInterval(() => {}, 10000);

// app.use(beforeMiddleware);

const handleRoute = async (req, res, next) => {
  await new Promise((r) => setTimeout(r, 10_000));
  res.send("ok");
  next();
};

// works, but you can't use global middleware (app.use) and your route handler must call next(). is that weird?
app.get("/", beforeMiddleware, handleRoute, afterMiddleware);

// app.use(afterMiddleware);

const server = http.createServer(app);

server.listen(3000);
