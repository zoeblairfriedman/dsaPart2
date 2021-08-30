function gradingStudents(grades){
 grades.forEach(el => console.log( el < 38 || el % 5 < 3 ? el : el + (5 - (el % 5))))
}

gradingStudents([73, 67, 38, 33])
// rounding up to 5 IF within 2 points of that multiple
// if rounding still means failing, don't round it 