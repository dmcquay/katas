import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }
`;

interface Book {
  title: string;
  author: string;
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
