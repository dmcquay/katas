"use strict";

const { workerData, parentPort } = require("worker_threads");

const delay = Math.round(Math.random() * 1000);

setTimeout(() => {
  parentPort.postMessage({ ...workerData, hello: workerData.text, delay });
}, delay);
