const http = require('http');

const data = `Name,Age
Dustin,23
Bob,45
Joey,66
Susan,33`

const requestHandler = (req, res) => {
        let body = ''
        req.on('data', data => {
                body += data
        })
        req.on('end', () => {
                console.log({
                        url: req.url,
                        headers: req.headers,
                });
		console.log(body)
                res.writeHead(200, 'OK', {
                        'Content-type': 'text/csv'
                });
                res.end(data);
        })
}

const server = http.createServer(requestHandler);

server.listen(8000);
