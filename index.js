import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from "./schema/index.js";
// Create an express server and a GraphQL endpoint
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On http://localhost:4000/graphql")
);
