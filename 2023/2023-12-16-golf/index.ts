import { ServerWebSocket } from "bun";

const BASE_PATH = "./public";

type Player = {
    id: string;
    name: string;
}

type Room = {
    players: Player[],
    status: 'waiting for players to join' | 'playing'
}

const EMPTY_ROOM: Room = {
    players: [],
    status: 'waiting for players to join'
}

type RoomStore = ReturnType<typeof createStore<Room>>;

const rooms: Record<string, RoomStore> = {};

const getOrCreateRoom = (roomName: string):RoomStore => {
    if (rooms[roomName]) {
        return rooms[roomName];
    } else {
        rooms[roomName] = createStore(EMPTY_ROOM);
        rooms[roomName].subscribe(state => {
            server.publish(roomName, JSON.stringify(state));
        })
        return rooms[roomName];
    }
}

const getRoom = (roomName: string):RoomStore => {
    if (rooms[roomName] == null) {
        throw new Error(`Room ${roomName} does not exist.`);
    }
    return rooms[roomName];
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
        if (server.upgrade(req)) {
            return;
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
        const {action, roomName, payload} = JSON.parse(message);
        if (action === 'join room') {
            const {roomName, name, playerId} = payload;
            ws.subscribe(roomName);
            const roomStore = getOrCreateRoom(roomName);
            const player = { id: playerId, name };
            roomStore.set(state => {
                return {
                    ...state,
                    players: [
                        ...state.players.filter(x => x.id !== player.id),
                        player
                    ]
                }
            })
        } else {
            if (typeof(roomName) !== 'string') {
                throw new Error('Missing roomName property');
            }
            const roomStore = getRoom(roomName);
            if (action === 'start') {
                roomStore.set(state => {
                    return {
                        ...state,
                        status: 'playing'
                    }
                })
            }
        }
    }
  }
});