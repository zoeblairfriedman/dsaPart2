function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2)
    while(arr[middle] !== elem && start <= end) {
        elem < arr[middle] ? end = middle - 1 : start = middle + 1
        middle = Math.floor((start+end)/2)
    }
    return arr[middle] === elem ? middle : -1
}

binarySearch([2,5,6,9,13,15,28,30], 3)
//            s     m          e 

// 13,15,28,30
// s        e   


// best case is O(1)
// worst and average is O(log n) as it doubles, the log is only really increasing by 1 so it's very good!
