const fs = require('fs').promises;

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const lines = data.split('\n');
    const students = lines.slice(1).filter((line) => line).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const field = student[3];
      if (!Object.prototype.hasOwnProperty.call(fields, field)) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    }

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  })
  .catch((err) => {
    console.log(`Caught an error: ${err}`);
    throw new Error('Cannot load the database');
  });

module.exports = countStudents;
