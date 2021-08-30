function countingSort(arr) {
  let result = Array.from({length: 100}, () => 0)
  for (let i = 0; i < arr.length; i++){
      result[arr[i]] += 1; 
  }
  console.log(result);
}

countingSort([13, 4, 5, 20, 50, 5, 4, 1, 2, 99]);


// let result = Array.from({length: 100}, () => 0)
// console.log(Array.from("Hello world"))