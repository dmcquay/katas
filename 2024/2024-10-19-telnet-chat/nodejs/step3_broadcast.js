const net = require('node:net');

const clients = new Set()

const broadcast = (message, sender) => {
  for (let client of clients) {
    if (client !== sender) {
      client.write(message + "\n");
    }
  }
};

const server = net.createServer(async (socket) => {
  clients.add(socket)

  socket.on('data', (data) => {
    if (data[0] === 255) return
    const message = data.toString().trim()
    broadcast(message, socket)
  })
})

const PORT = 23; // Standard telnet port
server.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
});