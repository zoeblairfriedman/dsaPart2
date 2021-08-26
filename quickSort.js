function pivot(arr, start=0, end=arr.length-1){
  const swap = (arr, idx1, idx2) => 
       ([arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]])
  
  let swapIdx = start
  let pivot = arr[start]
  for (let i = start + 1; i <= end; i++){
      if (arr[i] < pivot){
       swapIdx++;   
       swap(arr, swapIdx,i)
      }
  }
  swap(arr, start, swapIdx)
  return swapIdx;
  }
  
  
  function quickSort(arr, left=0, right=arr.length-1){
      if (left < right) {
          let pivotIdx = pivot(arr, left, right)
          //left
          quickSort(arr, 0, pivotIdx-1)
          //right
          quickSort(arr, pivotIdx+1,right)
      }
      return arr;
  }
  
  quickSort([4,8,-5,2,1,5,7,6,3])