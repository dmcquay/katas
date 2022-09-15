const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("hello".repeat(1000))

  const sqlResult = pool.stream()

  // setTimeout(() => {
    sqlResult.pipe(res)
  //   res.write('world'.repeat(1000))

  //   setTimeout(() => {
  //     res.end('all done here')
  //   }, 1000)
  // }, 1000)
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});