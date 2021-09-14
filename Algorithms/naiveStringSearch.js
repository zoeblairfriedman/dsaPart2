function naiveSearch(long, short){
    var exists = false;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) exists = true;
        }
    }
    return exists;
}

naiveSearch("lorie loled", "lol")