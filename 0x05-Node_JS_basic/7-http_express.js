const express = require('express');
const fs = require('fs').promises;

const port = 1245;
const app = express();

const countStudents = async (path) => {
  const data = await fs.readFile(path, 'utf8');
  const lines = data.split('\n');
  const students = lines.slice(1).filter((line) => line).map((line) => line.split(',').map((field) => field.trim()));
  const fields = {};
  for (const student of students) {
    if (student.length >= 4) {
      const field = student[3];
      const name = student[0];
      if (!Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field] = [];
      }
      fields[field].push(name);
    }
  }

  return fields;
};

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
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
    responseText = `Number of students ${total}\n${responseText}`;
    response.send(responseText.trim());
  } catch (err) {
    response.send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
