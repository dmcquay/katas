const http = require("http");

const intervalHandle = setInterval(() => {}, 10000);

const server = http.createServer(async (req, res) => {
  await new Promise((r) => setTimeout(r, 5_000));
  res.writeHead(200)
  res.end("ok");
})

server.listen(3000, () => {
  console.log('listening on port 3000')
});

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
