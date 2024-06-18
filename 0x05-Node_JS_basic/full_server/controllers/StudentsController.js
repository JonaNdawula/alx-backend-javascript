import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(request, response){
    try {
      const fields = await readDatabase(process.argv[2]);
      let responseText = 'This is the list of our students\n';
      let total = 0;
      let fieldText = '';
      for (const field in fields) {
        fieldText += `Number of students in ${field}: ${fields[field.length]}. List: ${fields[field].join(', ')}\n`;
	total += fields[field].length;
      }
      responseText += `Number of students: ${total}\n${fieldText}`;
      response.status(200).send(responseText.trim());
    } catch (err) {
      console.log(`Error: ${err}`);
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response){
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fields = await readDatabase(process.argv[2]);
      if (!fields[major]){
        response.status(500).send('Cannot load the database');
	return;
      }
      response.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (err) {
       console.log(`Error: ${err}`);
      response.status(500).send('Cannot load the database');

    }
  }
}

export default StudentsController;
