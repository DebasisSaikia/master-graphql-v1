// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.headers);
//     const logs = `${Date.now()} ${req.url} ${req.method} ${req.headers['user-agent']}\n`;
//     fs.appendFileSync('logs.txt', logs);
//     res.end('Hello from the server!');
// });
// server.listen(8000, () => console.log('Server is listening on port 8000...' ))
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//GRAPHQL SERVER
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

// const resolvers = {
//   Query: {
//     games: () => {
//       return db.games;
//     },
//     reviews: () => {
//       return db.reviews;
//     },
//     authors: () => {
//       return db.authors;
//     },
//     review: (_, args) => {
//       return db.reviews.find((review) => review.id === args.id);
//     },
//     game: (_, args) => {
//       return db.games.find((game) => game.id === args.id);
//     },
//     author: (_, args) => {
//       return db.authors.find((author) => author.id === args.id);
//     },

//   },
//   Game: {
//     reviews: (parent) => {
//       return db.reviews.filter((review) => review.game_id === parent.id);
//     },
//   },
//   Author:{
//     reviews: (parent) => {
//       return db.reviews.filter((review) => review.author_id === parent.id);
//     },
//   },
//   Mutation:{
//     deleteGame: (_, args) => {
//       const filteredGames = db.games.filter((game) => game.id !== args.id);
//       db.games = filteredGames;
//       return db.games;
//     },
//   }
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server started at ${url}`);
