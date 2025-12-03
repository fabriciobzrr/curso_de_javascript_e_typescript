function multiply(multiply) {
  function num(num) {
    return num * multiply
  }
  return num
}

const x4 = multiply(4)
const x6 = multiply(6)
const x8 = multiply(8)

console.log(x4(2))
console.log(x6(2))
console.log(x8(2))

function test() {
  console.log(nome)
  if(true){
    const nome = "Fer"
    console.log(nome)
  }
}
test()