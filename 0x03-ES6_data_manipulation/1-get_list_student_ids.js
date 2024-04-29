const getListStudentIds = (students) => {
  if (Array.isArray(students)) {
    return students.map((members) => members.id);
  }

  return [];
};

export default getListStudentIds;
