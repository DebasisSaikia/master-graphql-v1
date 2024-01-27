const typeDefs = `#graphql
 type User{
        id: ID!,
        name: String!,
        age: Int!,
        nationality: Nationality,
        friends: [User]
 }

 type Query{
        users: [User!]!,
        user(id: ID!): User,
 }

#  enums in graphql
enum Nationality{
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
}
`;

export { typeDefs };
