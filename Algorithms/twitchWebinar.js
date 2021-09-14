//naive solution
function missingWords(s, t){
let string = s.split(" ")
let sub = t.split(" ")
let result = []
let left = 0
for (let i = 0; i < string.length; i++){
  if (string[i] !== sub[left]){
    result.push(string[i])
  } else {
    left += 1;
  }
  // string[i] !== sub[left] ? result.push(string[i]) : left += 1;
} 
console.log(result)
}

missingWords("Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing", "programming Python elegant syntax and dynamic typing")
