const typeDefs = `#graphql
 type User{
        id: ID!,
        name: String!,
        email: String!,
        age: Int!,
        nationality: String,
 }

 type Query{
        users: [User]!,
 }
`;

export { typeDefs };
