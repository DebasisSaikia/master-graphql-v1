const typeDefs = `#graphql
 type User{
        id: ID!,
        name: String!,
        age: Int!,
        nationality: Nationality,
        friends: [User]
 }

 type Movie{
        id: ID!,
        name: String!,
        yearOfPublication: Int!,
        isInTheaters: Boolean!,
 }

 type Query{
        users: [User!]!,
        movies: [Movie!]!,
        user(id: ID!): User,
        movie(isReleased: Boolean!): Movie,
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
