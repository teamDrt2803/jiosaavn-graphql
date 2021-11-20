import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    hey: String
    kaise: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  hey: () => {
      return "Hey World";
  },
  kaise: () => {
      return "kaise hai?";
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

export default app.listen(4000);