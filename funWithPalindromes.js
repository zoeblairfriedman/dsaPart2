var isPalindrome = function(s) {
  let stringArr = s.replace(/[\W_]+/g, '').toLowerCase().split("")
  return stringArr.join("") === stringArr.reverse().join("") ? true : false
};
  


// different regex filters: 
// /[\W_]+/g
// /[.,\/#!?$%\^&\*"';@:{}=\-_`~()\[\]' ]/g

//   let s1 = s.replace(/[\W_]/g,"").toLowerCase()
//     let s2 = s1.split('').reverse().join('')
//     return(s1.slice(0,s1.length/2)==s2.slice(0,s1.length/2))

// REMEMBER TO REJOIN THE ARRAY TO NOT THROW WEIRD ERRORS