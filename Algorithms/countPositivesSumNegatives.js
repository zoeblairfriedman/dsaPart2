function countPostivesSumNegatives(input){
  return input.reduce((acc, curr) => {
    return (curr > 0) ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + curr]
  }, [0, 0])
}

console.log(countPostivesSumNegatives([1,2,3,-5,-9]))

