// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. https://leetcode.com/problems/plus-one/

// Increment the large integer by one and return the resulting array of digits.

// for loop
var plusOne = function(digits) {

  for (var i = digits.length-1; i >= 0; i--){
      if (digits[i] === 9) {
          digits[i] = 0
          // and do something?
      } else {
          digits[i] += 1
          return digits;
      }
  }
return [1, ...digits]
};


// while loop

var plusOne = function(digits) {
  let i = digits.length-1;
  while (i >= 0){
      if (digits[i] === 9) {
          digits[i] = 0
          i--;
      } else {
          digits[i] += 1
          return digits;
      }
  }
return [1, ...digits]
};