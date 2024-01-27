const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.headers);
    const logs = `${Date.now()} ${req.url} ${req.method} ${req.headers['user-agent']}\n`;
    fs.appendFileSync('logs.txt', logs);
    res.end('Hello from the server!');
});
server.listen(8000, () => console.log('Server is listening on port 8000...' ))