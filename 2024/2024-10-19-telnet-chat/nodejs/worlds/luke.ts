import { World } from "../types.ts";

export const luke: World = {
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
                    found: ["door"],
                    required: {
                        items: ["main key"],
                        message: "The door is locked",
                    },
                    response: {
                        moveToRoom: "shop",
                        message: "You opened the door and went through it",
                    },
                },
                // {
                //   name: "Look next to the table",
                //   found: ["table"],
                //   response: {
                //     find: ["safe"],
                //     message: "You found a safe.",
                //   },
                // },
            ],
        },
        shop: {
            initial:
                "You go down a hallway. Along the hallway, there is a shop.",
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
                        message:
                            `You don't have anything with which to build a key`,
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
                        message:
                            "The door is blown up. You can walk through the rubble.",
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
            initial:
                `There is a huge monster. It notices you and starts to attack.`,
            actions: [
                {
                    name: "Go back to the previous room",
                    response: {
                        moveToRoom: "pre_boss_room",
                        message: "",
                    },
                },
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
                "You are in the last room. You find a diamond. Go through the exit. You are now a free person and a diamond richer!",
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
