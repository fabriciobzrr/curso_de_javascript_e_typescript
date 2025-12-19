const nums = [1, 2, 3, 4, 54, 54, 23, 34, 432, 543, 21, 31, 21]
const pares = nums
  .filter((n) => {
    return n % 2 === 0
  })
  .map((n) => {
    return n * 2
  })
  .reduce((a, n) => {
    return a + n
  }, 0)
console.log(pares)
