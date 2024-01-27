const typeDefs = `#graphql
 type User{
        id: ID!,
        name: String!,
        age: Int!,
        nationality: String,
 }

 type Query{
        users: [User!]!,
 }
`;

export { typeDefs };
