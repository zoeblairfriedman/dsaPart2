
function areOccurrencesEqual(s) {
let obj = [...s].reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {})

return new Set(Object.values(obj)).size === 1;
}

console.log(areOccurrencesEqual("aabbcc"))
