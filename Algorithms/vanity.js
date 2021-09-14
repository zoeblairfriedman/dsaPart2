function vanity(codes, numbers) {
  let result = []
  
  function helper(l){
      const digits = {
          2: ["A", "B", "C"],
          3: ["D", "E", "F"],
          4: ["G", "H", "I"],
          5: ["J", "K", "L"],
          6: ["M", "N", "O"],
          7: ["P", "Q", "R", "S"],
          8: ["T", "U", "V"],
          9: ["W", "X", "Y", "Z"]
      }
      return Object.keys(digits).find(key => digits[key].includes(l))
  }
  
  function codeHelper(code){
      let num = ""
      for (var i = 0; i < code.length; i++){
          num += helper(code[i])
      }
      return num;
  }–
  
  function search(long, short){
      var exists = false;
      for(var i = 0; i < long.length; i++){
          for(var j = 0; j < short.length; j++){
             if(short[j] !== long[i+j]) break;
             if(j === short.length - 1) exists = true;
          }
      }
      return exists;
  }
  
  for (var j = 0; j < numbers.length; j++){
    for (var k = 0; k < codes.length; k++){
     if(!!search(numbers[j], codeHelper(codes[k]))) result.push(numbers[j])

    }
  }
  
  return result;
  }
 
  
  vanity(["TWLO"],["+1232387956", "+1232388956"])