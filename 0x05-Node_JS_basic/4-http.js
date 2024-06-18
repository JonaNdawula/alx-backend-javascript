const app = require('http');

const port = 1245;

app.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Holberton School!');
}).listen(port);
