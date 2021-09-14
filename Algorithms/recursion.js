//super simple
function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }
 
 sumRange(4)

// with factorial
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

// collecting odd numbers with a helper method
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

// pure recursion
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
//TIPS FOR PURE RECURSION                                           

// for arrays, use methods like slice, the spread operator, and concat to that make copies of arrays so you don't mutate them

//remember that strings are immutable so you will need to use slice, substr or substring to make copies of strings

// to make copies of objects use object.assign or the spread operator