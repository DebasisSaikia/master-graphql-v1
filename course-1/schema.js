const typeDefs = `#graphql
   type Game {
         id: ID!,
         title: String!,
         platform: [String!]!,
   } 
   type Review {
            id: ID!,
            rating: Int!,
            content: String!
   }
   type Author {
            id: ID!,
            name: String!,
            verified: Boolean!,
   }

   type Query {
            games: [Game],
            reviews: [Review],
            review(id: ID!): Review, # gameId is a query variable
            game(id: ID!): Game,
            author(id: ID!): Author,
            authors: [Author],
   }
`;

export { typeDefs };
//Types--> int, float, ID, string, boolean
