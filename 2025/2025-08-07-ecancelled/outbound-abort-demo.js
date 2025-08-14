const https = require('https');

console.log('Starting request that will be manually aborted...');

const controller = new AbortController();

setTimeout(() => {
  console.log('Manually aborting request...');
  controller.abort();
}, 1000);

const outboundReq = https.request({
  hostname: 'httpbin.org',
  path: '/delay/5',
  method: 'GET',
  signal: controller.signal
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

