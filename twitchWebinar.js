//naive solution
function missingWords(s, t){

  // split both into an array
  let string = s.split(" ")
  let subString = t.split(" ")

  // create a lookup object
  let subObject = {}
  for (var i = 0; i < subString.length; i++){
    let word = subString[i]
    subObject[word] = 1;
  }
  
  // filter out all the words that aren't here into an array
  console.log(string.filter(word => (!subObject[word])))
}

missingWords("I like cheese", "like")
