//naive solution
function missingWords(s, t){

  let string = s.split(" ")
  let subString = t.split(" ")
  let subObject = {}

  for (var i = 0; i < subString.length; i++){
    let word = subString[i]
    subObject[word] = 1;
  }
  
  console.log(string.filter(word => (!subObject[word])))
}

missingWords("I like cheese", "like")
