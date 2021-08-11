function productOfArray(arr){
    let total = arr[0]

    function helper(array){
    if (array.length === 0) return;
    total *= array[0];
    helper(array.slice(1))    
    }


helper(arr.slice(1))
return total;
}

// or 


function productOfArray(arr){
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))
}