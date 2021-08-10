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