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
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`Server started at ${url}`);
