import { buildSchema } from "graphql";

export default buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    rollNTimes(count: Int!): [Int]
  }

  type User {
    id: Int!
    name: String!
  }

  type Message {
      id: Int!
      body: String!
      user: User!
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
    getMessages: [Message]
    user(id: Int!): User
  }

  type Mutation {
    setMessage(message: String!): String!
  }
`);
