import { distance } from "https://deno.land/x/fastest_levenshtein/mod.ts";
import * as R from "https://deno.land/x/ramda@v0.27.2/mod.ts";
import { Action, State } from "./types.ts";
import { dustin } from "./worlds/dustin.ts";
import { gavin } from "./worlds/gavin.ts";
import { luke } from "./worlds/luke.ts";
import { violet } from "./worlds/violet.ts";

const worlds = {
  [dustin.name]: dustin,
  [luke.name]: luke,
  [gavin.name]: gavin,
  [violet.name]: violet,
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
        return;
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
        // if this action requires and item to be found that has not been found yet, exclude
        if (a.found != null) {
          for (const requiredToBeFound of a.found) {
            if (!roomState.found.includes(requiredToBeFound)) {
              // console.log(`Excluding ${a.name} because one of theses hasn't been found yet: ${a.found.join(',')}`)
              return false;
            }
          }
        }

        // if user has already found the things that this action will find, exclude
        const actionAcquiresOrFindsSomething = a.response.find != null ||
          a.response.acquireItem != null;
        let somethingToFind = false;
        let somethingToAcquire = false;
        if (a.response.find != null) {
          const notFoundYet = a.response.find.find((x) =>
            !roomState.found.includes(x)
          );
          somethingToFind = notFoundYet != null;
        }
        if (a.response.acquireItem != null) {
          somethingToAcquire = !worldState.items.includes(
            a.response.acquireItem,
          );
        }
        if (
          actionAcquiresOrFindsSomething &&
          !(somethingToAcquire || somethingToFind)
        ) {
          // console.dir({
          //   msg:`Excluding ${a.name} because there's nothing left fo find or acquire`,
          //   actionAcquiresOrFindsSomething,
          //   somethingToFind,
          //   somethingToAcquire,
          //   thisActionFinds: a.response.find,
          //   thisUserHasFound: roomState.found,
          //   thisActionAcquires: a.response.acquireItem,
          //   thisUserHasItems: worldState.items
          // }, {depth: null});
          return false;
        } else {
          // console.dir({
          //   msg:`Including ${a.name} because there's something left fo find or acquire`,
          //   actionAcquiresOrFindsSomething,
          //   somethingToFind,
          //   somethingToAcquire,
          //   thisActionFinds: a.response.find,
          //   thisUserHasFound: roomState.found,
          //   thisActionAcquires: a.response.acquireItem,
          //   thisUserHasItems: worldState.items
          // }, {depth: null});
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

      if (msg === "") {
        msg = "What can I do";
      }

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

      let action: Action | null;

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
          const dist = distance(msg.toLowerCase(), action.name.toLowerCase());
          const score = 1 - (dist / action.name.length);
          // console.log(`${score}: ${action.name} <=> ${msg}`)
          return {
            action,
            distance: dist,
            score,
          };
        });
        const winner = R.reverse(R.sortBy(R.prop("score"))(scoredActions))[0];
        if (winner.score > 0.5) {
          action = winner.action;
        } else {
          action = null;
        }
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
