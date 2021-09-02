//naive solution
function missingWords(s, t){
let string = s.split(" ")
let subString = t.split(" ")
let result = []
let tOne = 0
for (let i = 0; i < string.length; i++){
  if (string[i] !== subString[tOne]){
    result.push(string[i])
    continue;
  } else {
    tOne += 1;
  }
} 
console.log(result)
}

missingWords("Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing", "programming Python elegant syntax and dynamic typing")
