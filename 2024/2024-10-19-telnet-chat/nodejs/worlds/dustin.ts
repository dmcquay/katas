import { World } from "../types.ts";

export const dustin: World = {
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
