const typeDefs = `#graphql
   type Game {
         id: ID!,
         title: String!,
         platform: [String!]!,
         reviews: [Review!],
   } 
   type Review {
            id: ID!,
            rating: Int!,
            content: String!
            game: Game!,
            author: Author!,
   }
   type Author {
            id: ID!,
            name: String!,
            verified: Boolean!,
            reviews: [Review!],
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
