
const multiplyOthers = (prod, val) => {
  return (prod / val)
}

const productReducer = (array) => {
  return array.reduce((a, b) => a * b)
}

function multiplier(arr) {
  let result;
  // check for zeros: 
  let zeros = arr.filter((ele) => ele === 0).length
  zeros > 0 ? result = new Array(arr.length).fill(0) : result = []

  // if there's one zero, replace the value at that index with the product of remaining elements: 
  if (zeros === 1) {
    zeroIdx = arr.indexOf(0)
    const otherElements = []
    arr.forEach((element, index) => {
      if (index !== zeroIdx) otherElements.push(element)
    })
    let product = productReducer(otherElements)
    result[zeroIdx] = product
  // if there are no zeros, no problem: 
  } else if (zeros === 0) {
    let product = productReducer(arr)
    for (let i = 0; i < arr.length; i++) {
      result.push(multiplyOthers(product, arr[i]))
    }
  }

  // if there's more than one zero, you've already got an array full of zeros ready to go:
  console.log(result)
}


const arr1 = [1, 4, 3, 2] // [24, 6, 8, 12]
const arr2 = [0, 0, 3, 2] // [0, 0, 0, 0] <-- if there are more than one than they are all zeros
const arr3 = [0, 1, 3, 4] // [12, 0, 0, 0] <-- if there is only one zero, then we need to only solve for the value @ zero

multiplier(arr1)
multiplier(arr2)
multiplier(arr3)