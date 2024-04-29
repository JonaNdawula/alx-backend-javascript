const updateStudentGradeByCity = (students, cities, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }

  return students.filter((member) => member.location === cities)
    .map((member) => {
      const [newGrade] = newGrades.filter((item) => item.studentId === member.id);
      return {
        ...member,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
};

export default updateStudentGradeByCity;
