
import { gql } from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    name: String
  }

  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    createUser(email: String!, name: String): User!
  }
`;

export const userResolvers = {
  Query: {
    user: (_: unknown, { id }: { id: string }, { db }: any) =>
      db.users.find((u: any) => u.id === id),
    users: (_: unknown, __: unknown, { db }: any) => db.users,
  },
  Mutation: {
    createUser: (
      _: unknown,
      { email, name }: { email: string; name?: string },
      { db }: any
    ) => {
      const newUser = { id: String(db.users.length + 1), email, name };
      db.users.push(newUser);
      return newUser;
    },
  },
};

export const userSchema = makeExecutableSchema({
  typeDefs: userTypeDefs,
  resolvers: userResolvers
});
