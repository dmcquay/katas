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

function render(state) {
    const pages = {
        initial: document.getElementById('page-initial'),
        waiting: document.getElementById('page-waiting-for-others-to-join'),
        playing: document.getElementById('page-playing')
    };
    let activePage = 'initial';
    if (state.room != null) {
        if (state.room.status === 'waiting for players to join') {
            activePage = 'waiting';
        } else {
            activePage = 'playing';
        }
    }
    for (let pageName of Object.keys(pages)) {
        if (pageName === activePage) {
            pages[pageName].style.display = 'block';
        } else {
            pages[pageName].style.display = 'none';
        }
    }
    if (activePage === 'playing') {
        topOfDiscardPile.innerText = JSON.stringify(state.room.round.discardPile[state.room.round.discardPile.length - 1]);
    }
}

const getPlayerId = () => {
    const playerId = localStorage.getItem('playerId');
    if (playerId != null) return playerId;
    const newPlayerId = Math.floor(Math.random() * 99999999999999) + '';
    localStorage.setItem('playerId', newPlayerId);
    return newPlayerId;
}

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

const getInitialState = () => {
    const stateStr = localStorage.getItem('state');
    if (stateStr != null) {
        return JSON.parse(stateStr);
    } else {
        const state = {
            playerId: getPlayerId(),
            name: '',
            roomName: ''
        }
        localStorage.setItem('state', JSON.stringify(state));
        return state;
    }
};

const initialState = getInitialState();
const store = createStore(initialState);
store.subscribe(render);
store.subscribe(state => {
    const partialState = {
        playerId: state.playerId,
        name: state.name,
        roomName: state.roomName
    }
    localStorage.setItem('state', JSON.stringify(partialState));
});
const stateInspector = document.getElementById('state-inspector');
store.subscribe(state => {
    stateInspector.value = JSON.stringify(state, null, 2);
});

const nameInput = document.getElementById('name-input');
nameInput.value = initialState.name;
nameInput.addEventListener('keyup', (evt) => {
    store.set((state) => {
        return {
            ...state,
            name: evt.target.value
        }
    })
});

const roomNameInput = document.getElementById('room-name-input');
roomNameInput.value = initialState.roomName;
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

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
    const state = store.getState();
    socket.send(JSON.stringify({
        action: 'start',
        roomName: state.roomName
    }));
});

const topOfDiscardPile = document.getElementById('top-of-discard-pile');