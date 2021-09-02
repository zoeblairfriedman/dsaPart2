var longestCommonPrefix = function(strs) {
  let result = ""
  if (strs.length === 0 || strs === null) return result;
      
  for (var i = 0; i < strs[0].length; i++){
    // this loop is looping through the characters in the first word. the outer loop is just letters
    // so i represents the letters
      let letter = strs[0][i]
      for (var j = 1; j < strs.length; j++){
          // this loops is looping through the words one at a time
          // if the letter EVER doesn't match, return the result as is
          // so j represents the WORDS 
          if (strs[j][i] !== letter) return result
      }
      result += letter
  }   
  
  
  
  return result;
  };

 longestCommonPrefix(["flower","flow","flight"])

 // the key here is that when you get in the nitty gritty, you need to remember which loop is doing what