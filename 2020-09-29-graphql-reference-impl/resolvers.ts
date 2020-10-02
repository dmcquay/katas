import { pick } from "ramda";

import { DB, RollDiceArgs } from "./domain";

const db: DB = {
  message: "",
  users: {
    1: {
      id: 1,
      name: "Dustin McQuay",
    },
  },
};

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
};
