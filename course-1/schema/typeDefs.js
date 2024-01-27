const typeDefs = `#graphql
 type User{
        id: ID!,
        name: String!,
        age: Int!,
        nationality: Nationality,
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
