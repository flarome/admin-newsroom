import { gql } from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const orderTypeDefs = gql`
  type Order {
    id: ID!
    product: String!
    amount: Int!
    userId: ID!
  }

  extend type Query {
    orders: [Order!]!
    order(id: ID!): Order
  }

  extend type Mutation {
    createOrder(product: String!, amount: Int!, userId: ID!): Order!
  }
`;

export const orderResolvers = {
  Query: {
    orders: (_: unknown, __: unknown, { db }: any) => db.orders,
    order: (_: unknown, { id }: { id: string }, { db }: any) =>
      db.orders.find((o: any) => o.id === id),
  },
  Mutation: {
    createOrder: (
      _: unknown,
      { product, amount, userId }: { product: string; amount: number; userId: string },
      { db }: any
    ) => {
      const newOrder = {
        id: String(db.orders.length + 1),
        product,
        amount,
        userId,
      };
      db.orders.push(newOrder);
      return newOrder;
    },
  },
};


export const orderSchema = makeExecutableSchema({
  typeDefs: orderTypeDefs,
  resolvers: orderResolvers
});