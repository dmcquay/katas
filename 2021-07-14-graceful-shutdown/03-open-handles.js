const http = require("http");

// this will prevent our process from exiting.
// behaves very much like an open database connection.
// we must call clearInterval(intervalHandle) to allow the process to exit.
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
  server.close()
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
