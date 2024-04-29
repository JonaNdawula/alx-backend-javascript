const getStudentIdsSum = (students) => {
  if (Array.isArray(students)) {
    return students.reduce((studentIdSum, student) => studentIdSum + student.id, 0);
  }
  return [];
};

export default getStudentIdsSum;
