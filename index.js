import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/index.js";
import cors from "cors";
// Create an express server and a GraphQL endpoint
var allowlist = ["http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.includes(req.header("Origin"))) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

var app = express();
app.use(
  "/graphql",
  cors(corsOptionsDelegate),
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log(
    "Express GraphQL Server Now Running On http://localhost:4000/graphql"
  )
);
