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
      initial:
        "You are now in the basement. It is light here. There is a picture on the wall with patterns. Underneath the picture is a table with a board that has a spot for patterns. You see some drawers.",
      actions: [
        {
          name: "Open the top drawer",
          response: {
            acquireItem: "switch remotes",
            message: "You found 2 Nintendo Switch remotes",
          },
        },
        {
          name: "Open the second drawer",
          response: {
            message: "This drawer is locked.",
          },
        },
        {
          name: "Open the third drawer",
          response: {
            message: "This drawer is locked.",
          },
        },
        {
          name: "Inspect the picture",
          response: {
            message:
              "The picture is actually a door. Behind the door is a little cubby containing three blocks, each of a unique shape.",
            acquireItem: "blocks",
          },
        },
        {
          name: "Inspect the table",
          response: {
            find: ["button"],
            message: "On the table there is a small button. What does it do?",
          },
        },
        {
          name: "Push button",
          found: ["button"],
          response: {
            message:
              "The top of the table opens up and a board with three slots is revealed.",
            find: ["pattern board"],
          },
        },
        {
          name: "Put blocks into pattern board",
          found: ["pattern board"],
          required: {
            items: ["blocks"],
            message:
              `You don't have any blocks. Can you find some in the room?`,
          },
          response: {
            message:
              `You try different combinations until you find the right slot for each block. The pattern board opens, revealing a battery. A second table comes out from the floor.`,
            acquireItem: "battery",
            find: ["second table"],
          },
        },
        {
          name: "Inspect second table",
          response: {
            message: "You find a remote",
            find: ["remote"],
          },
        },
        {
          name: "Push remote button",
          found: ["remote"],
          required: {
            items: ["remote_with_battery"],
            message: "The battery is dead.",
          },
          response: {
            message:
              "A third table comes out of the floor. On the table is a puzzle board.",
            find: ["third table", "puzzle board"],
          },
        },
        {
          name: "Put battery in remote",
          found: ["remote_with_open_battery_door"],
          required: {
            items: ["battery"],
            message: `You don't have a battery`,
          },
          response: {
            message: "The remote is now usable",
            find: ["remote_with_battery"],
          },
        },
        {
          name: "Open remote battery door",
          found: ["remote"],
          required: {
            items: ["screwdriver"],
            message: "The battery door is secured with a screw.",
          },
          response: {
            find: ["remote_with_open_battery_door"],
            message:
              "You have opened the remote battery door. There is no battery in the remote.",
          },
        },
        {
          name: "Examine the ground",
          response: {
            message: "You find a hole in the ground and a ladder going down",
            find: ["hole in floor"],
          },
        },
        {
          name: "Go down hole in floor",
          response: {
            message:
              "You go through the hole in the floor. You climb down the ladder.",
            moveToRoom: "subbasement",
          },
        },
      ],
    },
    subbasement: {
      initial: "You are now in the subbasement. You a scredriver on a shelf.",
      actions: [
        {
          name: "Pick up screwdriver",
          response: {
            acquireItem: "screwdriver",
            message: "You have acquired a screwdriver",
          },
        },
        {
          name: "Go back up the ladder",
          response: {
            message: "You climb up the ladder",
            moveToRoom: "basement",
          },
        },
      ],
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
              "The door across the room creaks open. Behind it is a tunnel. It is too short to walk through. You have to crawl. At the end of the tunnel you find a block of gold.",
            acquireItem: "block of gold",
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
        {
          name: "Go back to shop",
          response: {
            moveToRoom: "shop",
            message: "You go back the way you came to the shop",
          },
        },
        {
          name: "Go through the second door",
          response: {
            moveToRoom: "power_to_pipes_hall",
            message: "You go through the door",
          },
        },
      ],
    },
    power_to_pipes_hall: {
      initial: "You are in a short hallway. You see three pipes.",
      actions: [
        {
          name: "Go into first pipe",
          response: {
            message:
              "You crawl in to the pipe. You find a hole in the pipe and you are able to jump into another broken pipe a few feet away. You crawl to the end of the broken pipe and enter a room.",
            moveToRoom: "pipe_room",
          },
        },
        {
          name: "Go into second pipe",
          response: {
            message: `You can't do that. It is closed.`,
          },
        },
        {
          name: "Go into third pipe",
          response: {
            message:
              `You crawl to the end of the piep and it is a dead end. You go back.`,
          },
        },
      ],
    },
    pipe_room: {
      initial:
        "You are in a room which several pipes lead to. There is a chair. There is also a vent in the ceiling.",
      actions: [
        {
          name: "Stand on the chair",
          response: {
            find: ["vent"],
            message: "The vent can be opened.",
          },
        },
        {
          name: "Climb up into the vent",
          found: ["vent"],
          response: {
            moveToRoom: "building_room",
            message:
              "It is difficult, but you manage to climb up into the vent. The vent takes you into another room.",
          },
        },
      ],
    },
    building_room: {
      initial: "You are in a dark room",
      actions: [
        {
          name: "Search behind you",
          response: {
            message: "You found a piece of wood",
            acquireItem: "wood1",
          },
        },
        {
          name: "Search in front you",
          response: {
            message: "You found a piece of wood",
            acquireItem: "wood2",
          },
        },
        {
          name: "Search above you",
          response: {
            message:
              "You found a piece of wood attached to the ceiling. You are able to break it loose.",
            acquireItem: "wood3",
          },
        },
        {
          name: "Build a key",
          required: {
            items: ["wood1", "wood2", "wood3"],
            message: `You don't have anything with which to build a key`,
          },
          response: {
            message:
              "You are very talented. You are able to build a key somehow from the three pieces of wood with your bare hands.",
            acquireItem: "build room wood key",
          },
        },
        {
          name: "Unlock the door",
          required: {
            items: ["build room wood key"],
            message: "The door is locked",
          },
          response: {
            message: "You unlocked the door",
            find: ["unlocked door"],
          },
        },
        {
          name: "Go through the door",
          found: ["unlocked door"],
          response: {
            message: "You leave the dark room through the door",
            moveToRoom: "main_hall",
          },
        },
      ],
    },
    main_hall: {
      initial:
        "You are in the main hall. At the end of the hall is a locked door. There is a bomb just sitting on the floor. Part way down the hall is a small room with no door.",
      actions: [
        {
          name: "Unlock the door",
          required: {
            items: ["item does not exist"],
            message: `You don't have a key that fits`,
          },
          response: {
            message: `THIS WILL NEVER BE TRIGGERED`,
          },
        },
        {
          name: "Explode the door",
          required: {
            items: ["matches"],
            message:
              `How can we make the bomb explode? It seems to have a fuse...`,
          },
          response: {
            message: "The door is blown up. You can walk through the rubble.",
            moveToRoom: "camera_hall",
          },
        },
        {
          name: "Look in small room",
          response: {
            message: "You found matches!",
            acquireItem: "matches",
          },
        },
      ],
    },
    camera_hall: {
      initial:
        `You are in another hallway. There are cameras, but you are behind them so they can't see you. There is a key hanging from a hook in the ceiling for some reason. There is a door at the end of the hall.`,
      actions: [
        {
          name: "Grab key hanging from ceiling",
          response: {
            acquireItem: "camera hall key",
            message: `You acquired a key`,
          },
        },
        {
          name: "Unlock the door",
          required: {
            items: ["camera hall key"],
            message: `The door is locked.`,
          },
          response: {
            find: ["unlocked door"],
            message: "You unlocked the door",
          },
        },
        {
          name: "Go through the door",
          found: ["unlocked door"],
          response: {
            message: "You go through the door",
            moveToRoom: "pre_boss_room",
          },
        },
      ],
    },
    pre_boss_room: {
      initial:
        'This room is completely empty. But there is a little room on the side. A little monster starts attacking you. He is called the nibbler. There is a door with a sign above it that says "Boss Room".',
      actions: [
        {
          name: "Fight the nibbler",
          response: {
            message: "Nibbler is dead",
            find: ["dead nibbler"],
          },
        },
        {
          name: "Look in small room",
          found: ["dead nibbler"],
          response: {
            message:
              "You found a sword! It is actually a shape-shifting device that can turn into a sword, knife or scissors.",
            acquireItem: "sword",
          },
        },
        {
          name: "Go through door to Boss Room",
          response: {
            moveToRoom: "boss_room",
            message: "You proceed to the Boss Room",
          },
        },
      ],
    },
    boss_room: {
      initial: `There is a huge monster. It notices you and starts to attack.`,
      actions: [
        {
          name: "Hit monster with your fist",
          response: {
            message: "Your fist is no match for this monster.",
          },
        },
        {
          name: "Slice the monster",
          required: {
            items: ["sword"],
            message:
              `You slice the monster with your hand. The monster is not phased.`,
          },
          response: {
            message: "You slayed the monster.",
            find: ["door to last room"],
          },
        },
        {
          name: "Go to next room",
          found: ["door to last room"],
          response: {
            moveToRoom: "last_room",
            message: "You go to the next room",
          },
        },
      ],
    },
    last_room: {
      initial:
        "You are in the last room. You find a diamond. Go through the exit. You are now a free person and a diamon richer!",
      actions: [
        {
          name: "Exit",
          response: {
            message: "Game over. You win. The end.",
          },
        },
      ],
    },
  },
};

const violet: World = {
  firstRoom: "outside",
  name: "Violet",
  rooms: {
    outside: {
      initial:
        `You are outside and see an interesting building. There is a door. It looks unlocked. You are curious and want to go in.`,
      actions: [
        {
          name: "Go through the door",
          response: {
            moveToRoom: "dungeon",
            message: "This is risky! You enter the building.",
          },
        },
      ],
    },
    dungeon: {
      initial:
        `You see yellow trampolines. And there's a yellow stick thing that goes all the way up to the ceiling. There are several security cameras.`,
      actions: [
        {
          name: "Bounce on the trampolines",
          response: {
            find: ["past trampolines"],
            message:
              "You got past the trampolines. You see an exit door across the room.",
          },
        },
        {
          name: "Walk to exit door",
          found: ["past trampolines"],
          response: {
            message:
              "You trip on a wire. It sets off a loud alarm on top of the yellow stick thing.",
            find: ["trip wire"],
          },
        },
        {
          name: "Step carefully over the trip wire",
          found: ["trip wire"],
          response: {
            message:
              'You make your way to the exit door. Before you get to the door, someone comes through it and says "This is a bad door to go through"',
            find: ["bad exit door"],
          },
        },
        {
          name: "Hide under the table",
          found: ["bad exit door"],
          response: {
            message:
              `Bad guys come out looking for you, but they don't see you because you are hiding under the table. The bad guys leave. You see a big hook.`,
            find: ["hook"],
          },
        },
        {
          name: "Jump up and grab onto hook",
          response: {
            message:
              "You jump up and grab onto the hook. Then you swing down onto a floating box. Then you jump into the pretend TNT box. You jump off of the TNT box onto the floor. You see a real exit door.",
            find: ["second door"],
          },
        },
        {
          name: "Open the second door",
          found: ["second door"],
          required: {
            items: ["second door key"],
            message: "The second door is locked!",
          },
          response: {
            message: "You go through the door",
            moveToRoom: "escape",
          },
        },
        {
          name: "Look around on the floor",
          found: ["second door"],
          response: {
            acquireItem: "second door key",
            message: "You find a key and pick it up",
          },
        },
      ],
    },
    escape: {
      initial: "There is a big red brick wall in this room",
      actions: [],
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
  [violet.name]: violet,
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

const loadSavefile = (file: string): State => {
  const rawData = Deno.readTextFileSync("./savefiles/" + file);
  return JSON.parse(rawData);
};

const saveToSavefile = (state: State, file: string) => {
  Deno.writeTextFileSync("./savefiles/" + file, JSON.stringify(state));
};

const buildClient = async (socket: Socket) => {
  let state: State | undefined = undefined;

  socket.writeLine("Select a save file:");
  const savefiles: string[] = [];
  for await (const file of Deno.readDirSync("./savefiles")) {
    savefiles.push(file.name);
    socket.writeLine("\t" + file.name);
  }
  socket.writeLine("\tnew");

  let savefile: string | undefined = undefined;
  let collectSavefileName = false;

  let selectingWorld = false;
  const selectWorld = () => {
    selectingWorld = true;
    socket.writeLine(
      `Select a world: \n\t${
        Object.values(worlds).map((world) => world.name).join("\n\t")
      }`,
    );
  };

  return {
    handleInput(msg: string) {
      if (state == null) {
        if (collectSavefileName) {
          savefile = msg;
          socket.writeLine(`Creating new savefile "${savefile}"`);
          state = {
            worlds: {},
          };
          selectWorld();
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
          state = loadSavefile(savefile);
          selectWorld();
          return;
        }
        socket.writeLine("That was not a valid save file");
      }

      if (state == null) {
        throw new Error("state should not be null anymore");
      }
      if (savefile == null) {
        throw new Error("savefile should not be null anymore");
      }

      if (msg === "save") {
        saveToSavefile(state, savefile);
        socket.writeLine("Saved");
        return;
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
        throw new Error("state.currentWorld should not be null at this point");
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
              extendedAvailableActions.map((x, idx) => `${idx + 1}: ${x.name}`)
                .join("\n\t"),
          },
        },
      ];

      let action: Action;

      if (/^\d+$/.test(msg)) {
        const idx = parseInt(msg) - 1;
        if (idx < 0 || idx > extendedAvailableActions.length - 1) {
          socket.writeLine(
            `Must be between 1 and ${extendedAvailableActions.length}`,
          );
          return;
        }
        action = extendedAvailableActions[idx];
      } else {
        const scoredActions = actions.map((action) => {
          return {
            action,
            distance: distance(msg.toLowerCase(), action.name.toLowerCase()),
          };
        });
        action = R.sortBy(R.prop("distance"))(scoredActions)[0].action;
      }

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

  console.log("shutting down");
}
