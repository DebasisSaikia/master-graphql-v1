const { ApolloServer, gql } = require('apollo-server');

// Define your GraphQL schema
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Define your resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
});
