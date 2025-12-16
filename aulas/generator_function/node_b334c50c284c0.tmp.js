function* generatorFun() {
  yield "Número 2"
  yield "Número 4"
  yield "Número 6"
}

const genF = generatorFun()
for (let retorno of genF) {
  console.log(retorno)
}

function* genInfinity() {
  let a = 0

  while (true) {
    yield a
    a++
  }
}
const genG = genInfinity()
for (let g of genG) {
  console.log(g)
}
