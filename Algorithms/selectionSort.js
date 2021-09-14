// similarl to bubble this is О(n2). because they are nested loops. Thi sis SLIGHTLY faster than bubble sort because it only swaps once each loop


// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([10,2,34,22,10,19,17]);



// const swap = (arr, idx1, idx2) =>
// ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
// //iterate through the array
// for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//     if (arr[lowest] > arr[j]) {
//         lowest = j;
//     }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
// }

// console.log(arr);