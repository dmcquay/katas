const uuid = require("uuid");

let gracefulShutdownRequested = false;
const reqs = {};

const beforeMiddleware = (req, res, next) => {
  console.log("request received");
  req.id = uuid.v4();
  reqs[req.id] = req;
  next();
};

const afterMiddleware = (req, res, next) => {
  delete reqs[req.id];
  console.log("request fulfilled");
  gracefulShutdownIfRequested();
  next();
};

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
  // TODO: provide a hook to do stuff like this
  // clearInterval(handle);
  process.exit(0);
};

process.on("SIGTERM", () => {
  console.log("Received SIGTERM");
  console.log(`There are ${Object.values(reqs).length} in-flight requests`);
  gracefulShutdownRequested = true;
});

module.exports = {
  beforeMiddleware,
  afterMiddleware,
};
