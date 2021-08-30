function countingSort(arr) {
  let result = Array.from({length: 100}, () => 0)
  for (let i = 0; i < arr.length; i++){
      result[arr[i]] += 1; 
  }
  return result;
}

countingSort();