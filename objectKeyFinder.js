var singleNumber = function(nums) {
  // create an object
  // find the value that is one and return that key
  let obj = {}
  for (var i = 0; i < nums.length; i++){
      let num = nums[i]
      obj[num] ? obj[num] +=1 : obj[num] = 1;
  }
  
  return Object.keys(obj).find(key => obj[key] === 1) // HERE IT IS!!! 
};

// what does this mean??? nums => nums.reduce((a,b)=> a^b)