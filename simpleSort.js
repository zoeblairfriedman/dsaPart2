function compare(num1, num2){
    return num1-num2;
}

[6,5,16,10].sort(compare)


function compareLen(str1,str2){
    return str1.length - str2.length;
}

["yes", "anonymous", "no", "maybe", "so"].sort(compareLen)

// OR:

["yes", "anonymous", "no", "maybe", "so"].sort((a,b) => a.length - b.length)
[6,5,16,10].sort((a,b) => a-b)

