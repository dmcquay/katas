const socket = new WebSocket("ws://localhost:3000/state");

// message is received
socket.addEventListener("message", event => {
    // const el = document.createElement('li')
    // el.innerHTML = event.data;
    // document.getElementById('messages').append(el)
});

// socket opened
socket.addEventListener("open", event => {
    // console.log('open', event)
    // socket.send('from browser')
});

// socket closed
socket.addEventListener("close", event => {
    // console.log('close', event)
});

// error handler
socket.addEventListener("error", event => {
    // console.log('error', event)
});

const nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', (evt) => {
    store.set((state) => {
        return {
            ...state,
            name: evt.target.value
        }
    })
});

const roomInput = document.getElementById('room');
roomInput.addEventListener('keyup', (evt) => {
    store.set((state) => {
        return {
            ...state,
            room: evt.target.value
        }
    })
});

const joinRoomBtn = document.getElementById('join-btn');
joinRoomBtn.addEventListener('click', () => {
    const state = store.getState();
    socket.send(JSON.stringify({
        action: 'join room',
        room: state.room
    }));
});

function render(state) {
    const pages = {
        initial: document.getElementById('initial')
    };
}

const getClientId = () => {
    const clientId = localStorage.getItem('clientId');
    if (clientId != null) return clientId;
    const newClientId = Math.random() * 99999999999999 + ''
    localStorage.setItem('clientId', newClientId);
    return newClientId;
}

const INITIAL_STATE = {
    room: '',
    name: '',
    clientId: getClientId()
};

const createStore = (initialState) => {
    let state = initialState;
    const subs = [];
    
    return {
        getState() {
            return state
        },

        set(cb) {
            state = cb(state);
            for (const sub of subs) {
                sub(state);
            }
        },

        subscribe(cb) {
            cb(state);
            subs.push(cb);
        }
    }
};

const store = createStore(INITIAL_STATE);
store.subscribe(render);

/*


action: joinRoom(room, name)

localState = {
    room: "my-room"
}
remoteState = {

}

state = {
    status: "initial"
}
action:
state: enter game id
*/