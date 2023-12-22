const socket = new WebSocket("ws://localhost:3000/state");

// message is received
socket.addEventListener("message", event => {
    // const el = document.createElement('li')
    // el.innerHTML = event.data;
    // document.getElementById('messages').append(el)
    const roomState = JSON.parse(event.data);
    store.set(state => {
        return {
            ...state,
            room: roomState
        }
    })
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

const nameInput = document.getElementById('name-input');
nameInput.addEventListener('keyup', (evt) => {
    store.set((state) => {
        return {
            ...state,
            name: evt.target.value
        }
    })
});

const roomNameInput = document.getElementById('room-name-input');
roomNameInput.addEventListener('keyup', (evt) => {
    store.set((state) => {
        return {
            ...state,
            roomName: evt.target.value
        }
    })
});

const joinRoomBtn = document.getElementById('join-btn');
joinRoomBtn.addEventListener('click', () => {
    const state = store.getState();
    socket.send(JSON.stringify({
        action: 'join room',
        payload: {
            roomName: state.roomName,
            name: state.name,
            playerId: state.playerId
        }
    }));
});

function render(state) {
    const pages = {
        initial: document.getElementById('initial')
    };
}

const getPlayerId = () => {
    const playerId = localStorage.getItem('playerId');
    if (playerId != null) return playerId;
    const newPlayerId = Math.floor(Math.random() * 99999999999999) + '';
    localStorage.setItem('playerId', newPlayerId);
    return newPlayerId;
}

const INITIAL_STATE = {
    playerId: getPlayerId(),
    name: '',
    roomName: ''
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
const stateInspector = document.getElementById('state-inspector');
store.subscribe(state => {
    stateInspector.value = JSON.stringify(state, null, 2);
})