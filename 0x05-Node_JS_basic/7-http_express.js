const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 1245;

app.get('/', (request, response) =>{
  res.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  let data;
  try {
    data = await fs.readFile(process.argv[2], {encoding: 'utf8'});
  } catch(err) {
    console.log(`Error: ${err}`);
    return response.send('Cannot load the database');
  }
  
  const lines = data.split('\n');
  const students = { CS: [], SWE: [] };
  lines.forEach((line) => {
    const info = line.split(',');
    if (info[3] == 'CS') {
     students.CS.push(info[0]);
    } else if (info[3] === 'SWE') {
      students.SWE.push(info[0]);
    }
  });
  
  let resp = 'This is the list of our students\n';
  resp += `Number of students: ${students.CS.length + students.SWE.length}\n`;
  resp += `Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n`;
  resp += `Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}\n`;

  response.send(resp);
});

app.listen(port);

module.exports = app;
