import { pick } from "ramda";
import * as DataLoader from "dataloader";

import { DB, RollDiceArgs, User } from "./domain";

const db: DB = {
  message: "",
  messages: [
    {
      id: 1,
      userId: 1,
      body: "Test message 1",
    },
    {
      id: 2,
      userId: 2,
      body: "Test message 2",
    },
  ],
  users: {
    1: {
      id: 1,
      name: "Dustin McQuay",
    },
  },
};

const userLoader = new DataLoader(getUsersByKeys);

async function getUsersByKeys(keys: number[]): Promise<(User | Error)[]> {
  return keys.map((key) => db.users[key] ?? new Error(`No result for ${key}`));
}

export default {
  slow1: async () => {
    await new Promise((r) => setTimeout(r, 3000));
    return "done";
  },
  // when calling slow1 and slow2 in a single query, they are run in parallel. total wait time was 3s, not 6s.
  slow2: async () => {
    await new Promise((r) => setTimeout(r, 3000));
    return "done";
  },
  hello: () => "Hello world 2!",
  quoteOfTheDay: () => {
    if (Math.random() < 0.5) return null;
    return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
  },
  rollDice: ({ numDice, numSides }: RollDiceArgs) => {
    const output = [];
    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  },
  getDie: ({ numSides }: { numSides: number }) => {
    return {
      numSides: () => numSides,
      rollOnce: () => {
        return 1 + Math.floor(Math.random() * numSides);
      },
      rollNTimes: function ({ count }: { count: number }) {
        const results = [];
        for (let i = 0; i < count; i++) {
          results.push(this.rollOnce());
        }
        return results;
      },
    };
  },
  setMessage: ({ message }: { message: string }) => {
    db.message = message;
    return message;
  },
  getMessage: () => db.message,
  user: ({ id }: { id: number }, req, foo) => {
    // if you wanted to fetch only the requested fields from a large object,
    // you could try this, though it seems possibly brittle.
    // https://stackoverflow.com/questions/48004805/how-to-get-requested-fields-inside-graphql-resolver
    const fields = foo.fieldNodes[0].selectionSet.selections.map(
      (s) => s.name.value
    );
    return pick(fields, db.users[id]);
  },
  getMessages: () => {
    return db.messages.map((message) => ({
      ...message,
      user: () => db.users[message.userId],
    }));
  },
  getMessagesWithLoader: () => {
    return db.messages.map((message) => ({
      ...message,
      user: () => userLoader.load(message.userId),
    }));
  },
};
