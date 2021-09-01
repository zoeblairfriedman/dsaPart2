//naive solution
function missingWords(s, t){

  // split both into an array
  let string = s.split(" ")
  let subString = t.split(" ")

  // create a lookup object
  let subObject = {}
  for (var i = 0; i < subString.length; i++){
    let word = subString[i]
    subObject[word] ? subObject[word] += 1 : subObject[word] = 1;
  }
  
  // iterate through string and check to see if it exists in the lookup object
      // if it doesn't, add it to the array
      // if it does, subtract one from the lookup Obj
  let result = [];
  for (var j = 0; j < string.length; j++){
    let word = string[j]
    if (!subObject[word]){
      result.push(word)
    } else {
      subObject[word] -= 1;
    }
  }
  console.log(result)
}

missingWords("I like cheese because cheese likes me", "I like cheese")
