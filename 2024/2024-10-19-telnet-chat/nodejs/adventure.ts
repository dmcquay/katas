import { distance } from "https://deno.land/x/fastest_levenshtein/mod.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";

type Action = {
  name: string;
  found?: string[];
  required?: {
    items: string[];
    message: string;
  };
  response: {
    acquireItem?: string;
    moveToRoom?: string;
    message: string;
    find?: string[];
  };
};

type Room = {
  initial: string;
  actions: Action[];
};

type World = {
  name: string;
  firstRoom: string;
  rooms: Record<string, Room>;
};

type RoomState = {
  found: string[];
};

type WorldState = {
  room: string;
  items: string[];
  rooms: Record<string, RoomState>;
};

type State = {
  currentWorld?: string;
  worlds: Record<string, WorldState>;
};

const dustin: World = {
  name: "Dustin",
  firstRoom: "room1",
  rooms: {
    room1: {
      initial: `You are in a dark room. You don't know where you are.`,
      actions: [
        {
          name: "Look around",
          response: {
            message: "It is too dark to see anything",
          },
        },
        {
          name: "Feel around on the floor",
          response: {
            acquireItem: "room1key",
            message: "You found a key",
          },
        },
        {
          name: "Open the door",
          required: {
            items: ["room1key"],
            message: "The door is locked",
          },
          response: {
            moveToRoom: "room2",
            message: "You opened the door and left the room",
          },
        },
      ],
    },
    room2: {
      initial: "You are in another dark room",
      actions: [],
    },
    finish: {
      initial: "Contratulations! You are outside and you are now free!",
      actions: [],
    },
  },
};

const gavin: World = {
  name: "Gavin",
  firstRoom: "storage",
  rooms: {
    storage: {
      initial: `You are locked in the storage room. You can't see anything.`,
      actions: [
        {
          name: "Feel around on the floor",
          response: {
            message: `You found a safe. It has buttons. It is locked.`,
            find: ["safe"],
          },
        },
        {
          name: "Feel around behind you",
          response: {
            find: ["table"],
            message: "You found a table",
          },
        },
        {
          name: "Search the table",
          found: ["table"],
          response: {
            find: ["device"],
            message:
              `You found a device. It seems to have a message on it, but you can't see it in the dark.`,
          },
        },
        {
          name: "Look at device",
          response: {
            message: "You see the following code on the device: 5973",
            acquireItem: "safe code",
          },
          required: {
            items: ["storage room light"],
            message: "It is too dark to read the message on the device.",
          },
          found: ["device"],
        },
        {
          name: "Feel around in the empty space",
          response: {
            message: "You found a cord hanging from the ceiling",
            find: ["cord"],
          },
        },
        {
          name: "Pull cord",
          response: {
            find: ["safe", "door", "device"],
            message:
              "A light turned on. You can now see. There is a table, a device on the table, a safe on the foor and a door in front of you.",
            acquireItem: "storage room light",
          },
          found: ["cord"],
        },
        {
          name: "Open safe",
          found: ["safe"],
          required: {
            items: ["safe code"],
            message:
              "The safe is locked. You need a 4-digit code to unlock it.",
          },
          response: {
            acquireItem: "storage room door key",
            message: "There was a key in the safe",
          },
        },
        {
          name: "Open door",
          required: {
            items: ["storage room door key"],
            message: "The door is locked",
          },
          found: ["door"],
          response: {
            message: "You opened the door and went through it",
            moveToRoom: "basement",
          },
        },
      ],
    },
    basement: {
      initial: "You are now in the basement. It is light here.",
      actions: [],
    },
  },
};

const luke: World = {
  name: "Luke",
  firstRoom: "main",
  rooms: {
    main: {
      initial: "You are in a dark room. Feel around.",
      actions: [
        {
          name: "Feel around on the floor",
          response: {
            message: "You feel table legs",
            find: ["table legs"],
          },
        },
        {
          name: "Feel up the table legs",
          found: ["table legs"],
          response: {
            message: "The table legs are part of a table",
            find: ["table"],
          },
        },
        {
          name: "Feel around on the table",
          found: ["table"],
          response: {
            message: "You found a key",
            acquireItem: "main key",
          },
        },
        {
          name: "Feel around in front of you",
          response: {
            find: ["door"],
            message: "You feel a door",
          },
        },
        {
          name: "Open the door",
          required: {
            items: ["main key"],
            message: "The door is locked",
          },
          response: {
            moveToRoom: "shop",
            message: "You opened the door and went through it",
          },
        },
        {
          name: "Look next to the table",
          found: ["table"],
          response: {
            find: ["safe"],
            message: "You found a safe.",
          },
        },
      ],
    },
    shop: {
      initial: "You go down a hallway. Along the hallway, there is a shop.",
      actions: [
        {
          name: "Ask the shopkeeper what is for sale",
          response: {
            message: "Healing food, Fire power up",
            find: ["product list"],
          },
        },
        {
          name: "Buy healing food",
          found: ["product list"],
          required: {
            items: ["block of gold"],
            message: `You need something valuable to trade with`,
          },
          response: {
            acquireItem: "healing food",
            message: `You acquired healing food!`,
          },
        },
        {
          name: "Continue down the hall",
          response: {
            moveToRoom: "power_room",
            message: "You go to the power room",
          },
        },
      ],
    },
    power_room: {
      initial:
        "There is a box with wires. There is also a door on the other side of the room.",
      actions: [
        {
          name: "Inspect box with wires",
          response: {
            message:
              `There are three wires. It looks like we need to cut one of them.`,
            find: ["wires"],
          },
        },
        {
          name: "Cut the red wire",
          found: ["wires"],
          response: {
            message:
              "The door across the room creaks open. You walk through the door.",
            find: ["open door"],
          },
        },
        {
          name: "Cut the blue wire",
          found: ["wires"],
          response: {
            message: "You got zapped! Try another wire.",
          },
        },
        {
          name: "Cut the yellow wire",
          found: ["wires"],
          response: {
            message: "You got zapped! Try another wire.",
          },
        },
      ],
    },
  },
};

const cloneRoom = (
  room: Room,
  nextRoom: string,
  additionalActions: Action[],
): Room => {
  return {
    ...room,
    actions: [
      ...room.actions.map((action) => {
        if (action.response.moveToRoom != null) {
          return {
            ...action,
            response: {
              ...action.response,
              moveToRoom: nextRoom,
            },
          };
        } else {
          return action;
        }
      }),
      ...additionalActions,
    ],
  };
};

const combined: World = {
  firstRoom: "dustin_room1",
  name: "Combined",
  rooms: {
    dustin_room1: cloneRoom(dustin.rooms.room1, "gavin_storage", []),
    gavin_storage: cloneRoom(gavin.rooms.storage, "luke_main", [{
      name: "Go back to previous room",
      response: {
        moveToRoom: "dustin_room1",
        message: "You went back to the first room",
      },
    }]),
    luke_main: cloneRoom(luke.rooms.main, "dustin_finish", [{
      name: "Go back to storage room",
      response: {
        moveToRoom: "gavin_storage",
        message: "You went through the door back to the storage room",
      },
    }]),
    dustin_finish: cloneRoom(dustin.rooms.finish, "na", []),
  },
};

const worlds = {
  [dustin.name]: dustin,
  [luke.name]: luke,
  [gavin.name]: gavin,
  [combined.name]: combined,
};

// validate references
for (const world of Object.values(worlds)) {
  for (const room of Object.values(world.rooms)) {
    for (const action of room.actions) {
      if (action.response.moveToRoom) {
        if (world.rooms[action.response.moveToRoom] == null) {
          throw new Error(
            `Invalid room reference: ${action.response.moveToRoom}`,
          );
        }
      }
    }
  }
}

type Socket = {
  writeLine: (msg: string) => void;
};

const loadSavefile = (file: string):State => {
  const rawData = Deno.readTextFileSync('./savefiles/' + file)
  return JSON.parse(rawData)
}

const saveToSavefile = (state: State, file: string) => {
  Deno.writeTextFileSync('./savefiles/' + file, JSON.stringify(state))
}

const buildClient = async (socket: Socket) => {
  let state: State | undefined = undefined

  socket.writeLine("Select a save file:");
  const savefiles: string[] = [];
  for await (const file of Deno.readDirSync("./savefiles")) {
    savefiles.push(file.name);
    socket.writeLine("\t" + file.name);
  }
  socket.writeLine("\tnew");

  let savefile: string | undefined = undefined;
  let collectSavefileName = false;

  let selectingWorld = false
  const selectWorld = () => { 
    selectingWorld = true
    socket.writeLine(
      `Select a world: \n\t${
        Object.values(worlds).map((world) => world.name).join("\n\t")
      }`,
    );
  }

  return {
    handleInput(msg: string) {
      if (state == null) {
        if (collectSavefileName) {
          savefile = msg;
          socket.writeLine(`Creating new savefile "${savefile}"`)
          state = {
            worlds: {},
          };
          selectWorld()
          return;
        }

        if (msg === "new") {
          socket.writeLine("Please enter a name for the save file");
          collectSavefileName = true;
          return;
        }
        if (savefiles.includes(msg)) {
          savefile = msg;
          socket.writeLine(`Loading savefile "${savefile}"`);
          state = loadSavefile(savefile)
          selectWorld()
          return;
        }
        socket.writeLine("That was not a valid save file");
      }

      if (state == null) {
        throw new Error('state should not be null anymore')
      }
      if (savefile == null) {
        throw new Error('savefile should not be null anymore')
      }

      if (msg === 'save') {
        saveToSavefile(state, savefile)
        socket.writeLine('Saved')
        return
      }

      let writeInitial = false;
      if (selectingWorld) {
        if (worlds[msg] == null) {
          socket.writeLine(`${msg} is not a valid world`);
          return;
        }
        state.currentWorld = msg;
        selectingWorld = false;
        writeInitial = true;
      }

      if (state.currentWorld == null) {
        throw new Error('state.currentWorld should not be null at this point')
      }

      const world = worlds[state.currentWorld];

      if (state.worlds[state.currentWorld] == null) {
        state.worlds[state.currentWorld] = {
          items: [],
          room: world.firstRoom,
          rooms: {},
        };
      }
      const worldState = state.worlds[state.currentWorld];

      const room = world.rooms[worldState.room];

      if (worldState.rooms[worldState.room] == null) {
        worldState.rooms[worldState.room] = {
          found: [],
        };
      }
      const roomState = worldState.rooms[worldState.room];

      if (writeInitial) {
        socket.writeLine(room.initial);
        return;
      }

      const availableActions = room.actions.filter((a) => {
        if (a.found == null) return true;
        for (const requiredToBeFound of a.found) {
          if (!roomState.found.includes(requiredToBeFound)) {
            return false;
          }
        }
        return true;
      });
      const extendedAvailableActions: Action[] = [
        ...availableActions,
        // {
        //   name: "Switch worlds",
        //   response: {
        //     message: "Not implemented yet",
        //   },
        // },
      ];

      const actions: Action[] = [
        ...extendedAvailableActions,
        {
          name: "What can I do",
          response: {
            message: `Try one of these:\n\t` +
              extendedAvailableActions.map((x) => x.name).join("\n\t"),
          },
        },
      ];

      const scoredActions = actions.map((action) => {
        return {
          action,
          distance: distance(msg.toLowerCase(), action.name.toLowerCase()),
        };
      });
      const action: Action =
        R.sortBy(R.prop("distance"))(scoredActions)[0].action;

      if (action == null) {
        socket.writeLine(`You can't do that here.`);
        return;
      }
      if (action.required) {
        for (const item of action.required.items) {
          if (!worldState.items.includes(item)) {
            socket.writeLine(action.required.message);
            return;
          }
        }
      }

      if (action.response.message) {
        socket.writeLine(action.response.message);
      }

      if (action.response.acquireItem) {
        worldState.items.push(action.response.acquireItem);
      }

      if (action.response.find) {
        for (const findThing of action.response.find) {
          roomState.found.push(findThing);
        }
      }

      if (action.response.moveToRoom) {
        worldState.room = action.response.moveToRoom;
        socket.writeLine(world.rooms[worldState.room].initial);
      }
    },
  };
};

const config = {
  port: Deno.env.has("PORT") ? parseInt(Deno.env.get("PORT")!) : 9999,
};

const listener = Deno.listen({ port: config.port });
console.log(`Listening on port ${config.port}`);

const decoder = new TextDecoder();
const encoder = new TextEncoder();

for await (const conn of listener) {
  const writeLine = (msg: string) => {
    conn.write(encoder.encode(msg + "\n"));
  };

  const client = await buildClient({
    writeLine,
  });

  for await (const chunk of conn.readable) {
    const data = decoder.decode(chunk).trim();
    client.handleInput(data);
  }

  console.log('shutting down')
}
