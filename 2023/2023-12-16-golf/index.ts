const BASE_PATH = "./public";

const server = Bun.serve({
  async fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/state") {
        // upgrade the request to a WebSocket
        if (server.upgrade(req)) {
            return; // do not return a Response
        }
        return new Response("Upgrade failed :(", { status: 500 });
    } else {
        let filePath = url.pathname;
        if (filePath.endsWith('/')) {
            filePath += 'index.html';
        }
        try {
            console.log(filePath)
            return new Response(Bun.file(BASE_PATH + filePath));
        } catch(err) {
            console.log('error: ' + filePath)
            return new Response('Not found', { status: 404 });
        }
    }
  },
  error() {
    return new Response('Custom error', { status: 500 });
  },
  websocket: {
    message(ws, message) {
        console.log('Message: ', message)
        
    }, // a message is received
    open(ws) {
        console.log('Open')
        ws.subscribe('state')
        ws.publish('state', 'state1')
    }, // a socket is opened
    close(ws, code, message) {
        console.log('Close')
    }, // a socket is closed
    drain(ws) {
        console.log('Drain')
    }, // the socket is ready to receive more data
  }, // handlers
});

setInterval(() => {
    server.publish('state', Math.random() + '')
}, 2000);