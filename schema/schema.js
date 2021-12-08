import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { InitialData } from "./index.js";
import { fetchLaunchData } from "../api/index.js";
export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      _dummy: {
        type: GraphQLString,
      },
    }),
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      initialData: {
        type: InitialData,
        resolve: (_s, args) => fetchLaunchData(),
      },
    }),
  }),
});