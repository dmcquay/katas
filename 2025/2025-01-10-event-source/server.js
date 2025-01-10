const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 8080;
const server = createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>Welcome to the server</p>
        <script>
            const eventSource = new EventSource('/events');
            eventSource.onmessage = (event) => {
                document.write(\`<p>\$\{event.data\}</p>\`);
            }
            eventSource.addEventListener('whatever', (event) => {
                document.write(\`<p>specific event:\$\{event.data\}</p>\`);
            });
        </script>
    </body>
</html>
        `);
    } else {
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')
        res.statusCode = 200;
        for (let i = 0; i < 100; i++) {
            res.write('event: whatever\n');
            res.write('data: named event (whatever)\n\n');
            res.write('data: pure data event\n\n');
            await new Promise(resolve => setTimeout(resolve, 100));
            // res.write('event: ping\n\n');
            // await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});