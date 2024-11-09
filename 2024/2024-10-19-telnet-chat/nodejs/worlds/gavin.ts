import { World } from "../types.ts";

export const gavin: World = {
    name: "Gavin",
    firstRoom: "storage",
    rooms: {
        storage: {
            initial:
                `You are locked in the storage room. You can't see anything.`,
            actions: [
                {
                    name: "Feel around on the floor",
                    response: {
                        message:
                            `You found a safe. It has buttons. It is locked.`,
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
                        message:
                            "You see the following code on the device: 5973",
                        acquireItem: "safe code",
                    },
                    required: {
                        items: ["storage room light"],
                        message:
                            "It is too dark to read the message on the device.",
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
                        message:
                            "On the table there is a small button. What does it do?",
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
                        message:
                            "You find a hole in the ground and a ladder going down",
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
            initial:
                "You are now in the subbasement. You a scredriver on a shelf.",
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
