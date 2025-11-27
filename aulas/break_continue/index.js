for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue
  } else if (i % 20 === 0) {
    break
  }
  console.log(i)
}
