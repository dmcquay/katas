import { World } from "../types.ts";

export const violet: World = {
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
            initial: "There is a big red brick wall in this room (incomplete)",
            actions: [
                {
                    name: "There is nothing left to do",
                    response: {
                        message:
                            "This is not a real action. Violet needs to finish this.",
                    },
                },
            ],
        },
    },
};
