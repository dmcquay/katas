const express = require('express');
const https = require('https');
const app = express();
const port = 3010;

app.get('/manual-abort', (req, res) => {
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
      if (res.headersSent) {
        console.log('Headers already sent, skipping response');
      } else {
        res.json({ message: 'Request completed', data });
      }
    });
  });

  outboundReq.on('error', (err) => {
    console.log('Manual abort error:', err.code, err.message);
    if (err.code === 'ECANCELLED' || err.code === 'ABORT_ERR') {
      console.log('ECANCELLED/ABORT detected!');
    }
    if (!res.headersSent) {
      res.status(500).json({ error: err.code, message: err.message });
    }
  });

  outboundReq.end();
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  }
  console.log(`Server running at http://localhost:${port}`);
  console.log('Try these endpoints:');
  console.log('  /outbound-request - Makes outbound request, cancel client to trigger ECANCELLED');
  console.log('  /manual-abort - Automatically aborts outbound request after 1s');
  console.log('  /long-operation - Long running operation');
});

