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
  
  pivot([4,8,2,1,5,7,6,3])