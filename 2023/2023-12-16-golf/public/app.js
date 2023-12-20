const socket = new WebSocket("ws://localhost:3000/state");

// message is received
socket.addEventListener("message", event => {
    const el = document.createElement('li')
    el.innerHTML = event.data;
    document.getElementById('messages').append(el)
});

// socket opened
socket.addEventListener("open", event => {
    console.log('open', event)
    socket.send('from browser')
});

// socket closed
socket.addEventListener("close", event => {
    console.log('close', event)
});

// error handler
socket.addEventListener("error", event => {
    console.log('error', event)
});