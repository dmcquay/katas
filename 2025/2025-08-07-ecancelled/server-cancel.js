const express = require('express');
const app = express();
const port = 3020;

app.use((req, res) => {
  console.log(`Incoming ${req.method} request to ${req.path} - immediately cancelling connection`);
  
  req.socket.destroy();
});

app.listen(port, () => {
  console.log(`Cancelling server running on http://localhost:${port}`);
  console.log('All incoming requests will be immediately cancelled/aborted');
  console.log('No valid HTTP responses will be sent');
});