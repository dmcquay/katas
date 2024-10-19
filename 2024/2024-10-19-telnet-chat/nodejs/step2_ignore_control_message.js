const net = require('node:net');

const server = net.createServer(async (socket) => {
  socket.on('data', (data) => {
    if (data[0] === 255) return
    const message = data.toString().trim()
    console.log(`Received message: ${message}`)
    socket.write('Got your message\n')
  })
})

const PORT = 23; // Standard telnet port
server.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
});