const http = require('http');
const fs = require('fs').promises;

const port = 1245;

const countStudents = async (path) => {
  const data = await fs.readFile(path, 'utf8');
  const lines = data.split('\n');
  const students = lines.slice(1).filter((line) => line).map((line) => line.split(','));
  const fields = {};
  for (const student of students) {
    const field = student[3];
    const name = student[0];
    if (!Object.prototype.hasOwnProperty.call(fields, field)) {
      fields[field] = [];
    }
    fields[field].push(name);
  }

  return fields;
};

const app = http.createServer(
  async (request, response) => {
	  const path = request.url;
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    if (request.url === '/') {
      response.write('Hello Holberton School!');
      response.end();
    } else if (request.url === '/students') {
      try {
        const fields = await countStudents(process.argv[2]);
        let responseText = 'This is the list of our students\n';
        let total = 0;
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            total += fields[field].length;
          }
        }
        responseText = `Number of students: ${total}\n${responseText}`;
        response.write(responseText);
        response.end();
      } catch (err) {
	 console.log(`The issue is :${err}`);
        response.write('Cannot load the database');
	 response.end();
      }
    } else {
      response.write('Not found');
      response.end();
    }
  },
).listen(port);
module.exports = app;
