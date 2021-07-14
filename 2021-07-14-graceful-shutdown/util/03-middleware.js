const uuid = require("uuid");

let gracefulShutdownRequested = false;
const reqs = {};
const shutdownHandlers = [];
let server;

const onShutdownSignal = (handler) => shutdownHandlers.push(handler);

// can get this from req.connection.server, but if there were no in-flight requests then that would fail
// could store in beforeMiddleware, which would just require that we get at least one request. i don't love
// that either, but might be acceptable. for now, let's just be explicit.
const setServer = (x) => (server = x);

const beforeMiddleware = (req, res, next) => {
  console.log("request received");
  req.id = uuid.v4();
  reqs[req.id] = req;
  next();
};

const afterMiddleware = (req, res, next) => {
  delete reqs[req.id];
  console.log("request fulfilled");
  gracefulShutdownIfRequested().then(next);
};

const gracefulShutdownIfRequested = async () => {
  if (!gracefulShutdownRequested) return;
  if (Object.values(reqs).length > 0) {
    console.log(
      `There are ${
        Object.values(reqs).length
      } in-flight requests. Cannot shut down yet.`
    );
    return;
  }
  console.log("No more requests. Calling shutdown handlers.");
  for (let handler of shutdownHandlers) {
    await handler();
  }
  console.log("Finished shutdown handlers. Exiting.");
};

process.on("SIGTERM", () => {
  console.log("Received SIGTERM");
  console.log(`There are ${Object.values(reqs).length} in-flight requests`);
  gracefulShutdownRequested = true;
  server.close(); // immediately stop accepting new connections
});

module.exports = {
  beforeMiddleware,
  afterMiddleware,
  onShutdownSignal,
  setServer,
};
