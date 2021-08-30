// function gradingStudents(grades){
//  grades.forEach(el => console.log( el < 38 || el % 5 <= 2 ? el : el + (5 - (el % 5))))
// }

// gradingStudents([73, 67, 38, 33])
// // rounding up to 5 IF within 2 points of that multiple
// // if rounding still means failing, don't round it 

// old school
// function addToBeginning(input, array){
//   array.unshift(input)
//   console.log(array)
// }
// function addToEnd(input, array){
//   array.push(input)
//   console.log(array)
// }

//es6

let myArray = ['a', 'b', 'c', 'd']
myArray = ["start", ...myArray, "end"]
console.log(myArray)