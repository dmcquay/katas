const http = require('http');

console.log('Starting request that will be manually aborted...');

const outboundReq = http.request({
  hostname: 'localhost',
  port: 3020,
  path: '/asdf',
  method: 'GET',
}, (response) => {
  let data = '';
  response.on('data', chunk => data += chunk);
  response.on('end', () => {
    console.log('Response received:', data);
  });
});

outboundReq.on('error', (err) => {
  console.log('Manual abort error:', err.code, err.message);
  if (err.code === 'ECANCELLED' || err.code === 'ABORT_ERR') {
    console.log('ECANCELLED/ABORT detected!. Code:', err.code);
  }
});

outboundReq.end();

