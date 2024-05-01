interface Student { 
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jonathan",
  lastName: "Ndawula",
  age: 35,
  location: "Kampala",
}	

const student2: Student = {
  firstName: "Karen",
  lastName: "Mitala",
  age: 25,
  location: "Nairobi",
}

const studentsList: Student[] = [student1, student2];

function createTable(students: student[]): void{
  let table = document.createElement('table');
  students.forEach(student => {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  document.body.appendChild(table);
}

createTable(studentsList);
