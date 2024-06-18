import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export const readDatabase = async (path) => {
  const data = await readFile(path, 'utf8');
  const lines = data.split('\n');
  const students = lines.slice(1).filter(line => line).map(line => line.split(','));
  const fields = {};
  for (const student of students) {
    const field = student[3];
    const name = student[0];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(name);
  }
  return fields;
}
