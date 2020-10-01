import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    rollNTimes(count: Int!): [Int]
  }

  type Query {
    slow1: String!
    slow2: String!
    hello: String
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int!]!
    rollDice(numDice: Int!, numSides: Int): [Int]
    getDie(numSides: Int!): RandomDie
    getMessage: String!
  }

  type Mutation {
    setMessage(message: String!): String!
  }
`);

interface RollDiceArgs {
  numDice: number;
  numSides?: number;
}

const db = {
  message: "",
};

const rootValue = {
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
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
