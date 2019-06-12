"use strict";

const { Worker } = require("worker_threads");
var sem = require("semaphore")(10);

const start = Date.now();

function runService(text) {
  return new Promise((resolve, reject) => {
    sem.take(() => {
      const worker = new Worker("./service.js", {
        workerData: { text, startedAt: Date.now() - start }
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", code => {
        sem.leave();
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  });
}

async function run() {
  for (let i = 0; i < 100; i++) {
    console.log(await runService("world"));
  }
}

run().catch(err => console.error(err));
