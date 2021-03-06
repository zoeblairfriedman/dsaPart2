function power(base, exp){
    if (exp === 0) return 1;
    
    let total = base
    
        function helper(e){
        if (e === 1) return;
         
        total *= base;
        e--;
        helper(e)
        }
    
    helper(exp)
    return total;
    }
    
    power(2,4)


    // OR 

    function power(base, exponent){
        if(exponent === 0) return 1;
        return base * power(base,exponent-1);
    }

    