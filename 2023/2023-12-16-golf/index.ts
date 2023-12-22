import { ServerWebSocket } from "bun";

const BASE_PATH = "./public";

type Player = {
    id: string;
    name: string;
}

type Room = {
    players: Player[],
    status: 'waiting for players to join'
}

const EMPTY_ROOM: Room = {
    players: [],
    status: 'waiting for players to join'
}

type RoomStore = ReturnType<typeof createStore<Room>>;

const rooms: Record<string, RoomStore> = {};

const getOrCreateRoom = (roomName: string, ws: ServerWebSocket<unknown>):RoomStore => {
    if (rooms[roomName]) {
        return rooms[roomName];
    } else {
        rooms[roomName] = createStore(EMPTY_ROOM);
        rooms[roomName].subscribe(state => {
            ws.send(JSON.stringify(state));
        })
        return rooms[roomName];
    }
}

const createStore = <T>(initialState: T) => {
    let state:T = initialState;
    type Subscriber = (state: T) => void;
    const subs: Subscriber[] = [];
    
    return {
        getState() {
            return state
        },

        set(cb: (state: T) => T) {
            state = cb(state);
            for (const sub of subs) {
                sub(state);
            }
        },

        subscribe(cb: Subscriber) {
            cb(state);
            subs.push(cb);
        }
    }
};

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
    message(ws, message: string) {
        const {action, payload} = JSON.parse(message);
        if (action === 'join room') {
            const {roomName, name, playerId} = payload;
            ws.subscribe(roomName);
            const roomStore = getOrCreateRoom(roomName, ws);
            roomStore.set(state => {
                return {
                    ...state,
                    players: [
                        ...state.players,
                        { id: playerId, name }
                    ]
                }
            })
        }
    }, // a message is received
    open(ws) {
        console.log('Open')
        // ws.subscribe('state')
        // ws.publish('state', 'state1')
    }, // a socket is opened
    close(ws, code, message) {
        console.log('Close')
    }, // a socket is closed
    drain(ws) {
        console.log('Drain')
    }, // the socket is ready to receive more data
  }, // handlers
});