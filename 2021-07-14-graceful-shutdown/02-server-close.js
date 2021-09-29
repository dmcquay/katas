const http = require("http");

const server = http.createServer(async (req, res) => {
  await new Promise((r) => setTimeout(r, 5_000));
  res.writeHead(200)
  res.end("ok");
})

server.listen(3000, () => {
  console.log('listening on port 3000')
});

const gracefulShutdown = () => {
  server.close()
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
