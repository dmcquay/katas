const http = require("http");

const intervalHandle = setInterval(() => {}, 10000);

const server = http.createServer(async (req, res) => {
  // this request takes extremely long to fulfill, making our server "hang" when we try to close it.
  // solutions:
  //  1. try to close open handles and then process.exit (easy and sufficient - the one implemented in this example)
  //  2. rely on a process manager to send you SIGKILL after a timeout (even more lazy - probably sufficient in most cases)
  //  3. track open conenctions so that we can close them all upon timeout (most robust - I'm not so sure it is warranted)
  await new Promise((r) => setTimeout(r, 500_000));
  res.writeHead(200)
  res.end("ok");
})

server.listen(3000, () => {
  console.log('listening on port 3000')
});

const finalShutdown = (force = false) => {
  clearInterval(intervalHandle)
  clearTimeout(shutdownTimeoutHandle)
  console.log('handles closed. process should now exit.')
  if (force) {
    process.exit(1)
  }
}

let shutdownTimeoutHandle = undefined

const gracefulShutdown = () => {
  console.log('shutting down. no more connections will be accepted.')
  
  server.close(() => {
    console.log('all http connections have closed')
    finalShutdown()
  })

  shutdownTimeoutHandle = setTimeout(() => {
    console.log('shutdown timeout exceeded. forcing shutdown.')
    finalShutdown(true)
  }, 10_000)
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
