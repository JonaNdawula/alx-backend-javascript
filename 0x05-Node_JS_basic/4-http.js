const app = require('http');

const port = 1245;

app.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello Holberton School!');
  response.end();
}).listen(port);

module.exports = app;
