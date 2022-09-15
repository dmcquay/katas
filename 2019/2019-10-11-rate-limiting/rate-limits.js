"use strict";

const rateLimit = (windowIntervalMillis, maxCount, identifyClientFn) => {
  let countsByClient = {};

  setInterval(() => (countsByClient = {}), windowIntervalMillis);

  return (req, res, next) => {
    const clientIdentifier = identifyClientFn(req);

    if (typeof clientIdentifier !== "string" || clientIdentifier.length === 0) {
      res.status(400);
      res.send("Cannot identify client");
    }

    countsByClient[clientIdentifier] = countsByClient[clientIdentifier] || 0;

    if (countsByClient[clientIdentifier] >= maxCount) {
      res.status(429);
      res.send("Too Many Requests");
    } else {
      countsByClient[clientIdentifier]++;
      next();
    }
  };
};

const identifyClientByToken = req => req.headers.token;

module.exports = {
  rateLimit,
  identifyClientByToken
};
