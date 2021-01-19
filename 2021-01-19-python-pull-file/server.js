const http = require('http');

const data = `Name,Age
Dustin,23
Bob,45
Joey,66
Susan,33`

const requestHandler = (req, res) => {
        console.log({
                url: req.url,
                headers: req.headers
        });
        res.writeHead(200, 'OK', {
                'Content-type': 'text/csv'
        });
        res.end(data);
}

const server = http.createServer(requestHandler);

server.listen(8000);