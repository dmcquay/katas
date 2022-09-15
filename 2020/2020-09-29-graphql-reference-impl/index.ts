import * as express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./schema";
import rootValue from "./resolvers";

const app = express();

app.use(
  "/",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/");
});
