const net = require('node:net');

const clients = new Set();

const broadcast = (message, sender) => {
  for (let client of clients) {
    if (client !== sender) {
      client.socket.write(message);
    }
  }
};

const server = net.createServer(async (socket) => {
  socket.write('Welcome to the chat server!\n');
  socket.write('What is your name? ');

  let name = undefined
  let client = undefined
  let firstMessage = true

  socket.on('data', (data) => {
    message = data.toString().trim()
    if (message === 'leave') {
        socket.end()
        return
    }
    if (firstMessage) {
        firstMessage = false
        return
    }
    if (name == null) {
        name = message
        
        broadcast(`${name} has joined the chat\n`, client);
        if (clients.size === 0) {
            socket.write('You are the only person in this chat.\n')
        } else if (clients.size === 1) {
            const firstClient = clients.values().next().value;
            socket.write(`${firstClient.name} is here.\n`)
        } else {
            socket.write(`${Array.from(clients).map(c => c.name).join(', ')} are here.\n`)
        }
        client = {socket, name}
        clients.add(client);
    } else {
        broadcast(`${name} says: ${message}\n`, client);
    }
  });
  
  socket.on('end', () => {
    clients.delete(client);
    broadcast(`${name} left the chat.\n`, client);
  });
  
  socket.on('error', (err) => {
    console.error(`Socket error: ${err.message}\n`);
    clients.delete(client);
  });
});

const PORT = 23; // Standard telnet port
server.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
});
