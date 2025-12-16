function countingNum(max) {
  console.log(max)
  if (max >= 20) return
  max++
  countingNum(max)
}

countingNum(0)
