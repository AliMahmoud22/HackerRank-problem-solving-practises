function gradingStudents(grades) {
  let gradesAfterRounding = [];
  let gradeAfteRround = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      gradesAfterRounding.push(grades[i]);
      continue;
    }
    gradeAfteRround = Math.ceil(grades[i] / 5) * 5;
    if (gradeAfteRround - grades[i] < 3) {
      gradesAfterRounding.push(gradeAfteRround);
    } else {
      gradesAfterRounding.push(grades[i]);
    }
  }
  return gradesAfterRounding;
}
