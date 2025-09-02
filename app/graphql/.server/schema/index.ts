import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { gql } from "graphql-tag";

import { userTypeDefs, userResolvers, userSchema } from "./users";
import { orderTypeDefs, orderResolvers, orderSchema } from "./orders";

// Schéma racine minimal
const rootTypeDefs = gql`
  type Query
  type Mutation
`;

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([
    rootTypeDefs,
    userTypeDefs,
    orderTypeDefs,
  ]),
  resolvers: mergeResolvers([userResolvers, orderResolvers]),
});


export const schemas = {
    users: userSchema,
    order: orderSchema
}