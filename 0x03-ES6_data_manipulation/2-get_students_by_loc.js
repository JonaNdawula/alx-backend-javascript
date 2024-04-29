const getStudentByLocation = (students, city) => {
  if (Array.isArray(students)) {
    return students.filter((members) => members.location === city);
  }
  return [];
};

export default getStudentByLocation;
