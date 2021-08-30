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

// let myArray = ['a', 'b', 'c', 'd']
// myArray = ["start", ...myArray, "end"]
// console.log(myArray)

// how to create a private variable in javascript? 

// function secretVariable(){
//   var private = "super secret";
//   return function(){
//     return private;
//   }
// }

// var getPrivate = secretVariable()

// console.log(secretVariable())

//naive solution
// function scoreTracker(arr){
//   let high = arr[0]
//   let highCount = 0
//   let low = arr[0]
//   let lowCount = 0
//   for (let i = 1; i < arr.length; i++){
//       if (arr[i] > high) {
//         high = arr[i];
//         highCount ++;
//       }
//       if (arr[i] < low) {
//         low = arr[i];
//         lowCount ++;
//       }
      
//   }
//   console.log([highCount,lowCount])
// }

function scoreTracker(arr){
  let high = arr[0]
  let highCount = 0
  let low = arr[0]
  let lowCount = 0

  const helper = (allScores) => {
    allScores.shift();
    if(allScores.length < 1) return;
    if(allScores[0] > high){
      high = allScores[0]
      highCount++
    }
    if(allScores[0] < low){
      low = allScores[0]
      lowCount++
    }
    helper(allScores)
  }
  helper(arr)
  console.log([highCount, lowCount])
}


scoreTracker([10, 5, 20, 20, 4, 5, 2, 25, 1])