const http = require("http");
const { createHttpTerminator } = require('http-terminator');

const intervalHandle = setInterval(() => {}, 10000);

const server = http.createServer(async (req, res) => {
  await new Promise((r) => setTimeout(r, 5_000));
  res.writeHead(200)
  res.end("ok");
});

server.keepAliveTimeout = 1_000_000; // milliseconds

server.listen(3000, () => {
  console.log('listening on port 3000')
});

const httpTerminator = createHttpTerminator({
  server,
  gracefulTerminationTimeout: 10_000
});

const gracefulShutdown = async () => {
  console.log('shutting down. no more connections will be accepted.')
  await httpTerminator.terminate();
  console.log('all http connections have closed or we timed out')
  clearInterval(intervalHandle)
  console.log('handles closed. process should now exit.')
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

/*
things to note about http-terminator:
  - when keep-alive connections have no unfulfilled requests, the connections are closed immediately. win!
  - supposedly, under the hood, clients with keep-alive connections are informed that we are going to shut down.
    i haven't been able to observe an problems caused by not doing this, but perhaps this is a more proper/clean
    solution.
  - when a request takes longer to fulfill than the timeout, the connection is closed so shutdown can continue
  - i think use of this library is primarily justified if you need to have a long keep alive timeout. i expect
    that this need should be rare though. if you don't have this need, i think it only saves a small bit of code
    and doesn't justify bloating your dependencies. (my opinion! would love to hear counter-arguments.)
*/