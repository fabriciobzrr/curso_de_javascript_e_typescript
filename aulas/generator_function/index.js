// function* generatorFun() {
//   yield "Número 2"
//   yield "Número 4"
//   yield "Número 6"
// }

// const genF = generatorFun()
// for (let retorno of genF) {
//   console.log(retorno)
// }

// function* genInfinity() {
//   let a = 0

//   while (true) {
//     yield a
//     a++
//   }
// }
// const genG = genInfinity()
// for (let g of genG) {
//   if (g >= 3) return
//   console.log(g)
// }

function* genFunct() {
  yield function () {
    console.log("Meu 1")
  }
  yield function () {
    console.log("Meu 2")
  }
}

const genFF = genFunct()
const func1 = genFF.next().value
const func2 = genFF.next().value

func1()
func2()
