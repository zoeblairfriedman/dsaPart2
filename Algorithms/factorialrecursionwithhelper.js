function factorial(num){
    if (num === 0) return 1;
    
    let total = num
    function helper(n){
        if (n === 0) return;
        total *= (n)
        helper(n-1)     
    }

   
    helper(num-1)
    return total;
}

factorial(7)

// OR 

function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }

 