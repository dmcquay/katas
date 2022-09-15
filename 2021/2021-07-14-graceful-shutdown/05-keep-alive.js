const http = require("http");

const intervalHandle = setInterval(() => {}, 10000);

const server = http.createServer(async (req, res) => {
  await new Promise((r) => setTimeout(r, 1_000));
  res.writeHead(200)
  res.end("ok");
});

server.keepAliveTimeout = 1_000_000; // milliseconds

server.listen(3000, () => {
  console.log('listening on port 3000')
});

let connCount = 0
server.on('connection', (conn) => {
  connCount++
  console.log('connection opened. count:', connCount)
  conn.once('close', () => {
    connCount--
    console.log('connection closed. count:', connCount)
  })
})

const gracefulShutdown = () => {
  console.log('shutting down. no more connections will be accepted.')
  server.close(() => {
    console.log('all http connections have closed')
    clearInterval(intervalHandle)
    console.log('handles closed. process should now exit.')
  })
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
