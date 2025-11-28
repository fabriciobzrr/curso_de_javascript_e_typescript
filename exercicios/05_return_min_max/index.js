// Se n1 for maior que n2 retorna n1 senão retorna n2
// function numMaior(n1, n2) {
//   if (n1 > n2) {
//     return n1
//   } else {
//     return n2
//   }
// }
// console.log(numMaior(22, 122))

// Se o primeiro if for true retorna n1 isso indica que retorna n2 já é uma condição
// function numMaior(n1, n2) {
//   if (n1 > n2) {
//     return n1
//   }
//   return n2
// }
// console.log(numMaior(22, 122))

// Resumindo a função acima
// function numMaior(n1, n2) {
//   if (n1 > n2) return n1
//   return n2
// }
// console.log(numMaior(22, 122))

// Resumindo mais ainda
// function numMaior(n1, n2) {
//   return n1 > n2 ? `${n1}` : `${n2}`
// }
// console.log(numMaior(22, 122))

// Resumindo com arrow function
// const maior = (a, b) => {
//   return a > b ? `${a}` : `${b}`
// }
// console.log(maior(3, 20))

// Resumindo mais ainda com arrow function
const maior = (a, b) => (a > b ? `${a}` : `${b}`)
console.log(maior(33, 6))

// retorna o maior com o método .max do objeto Math
// function max(a, b) {
//   return Math.max(a, b)
// }
// console.log(max(100, 10))
