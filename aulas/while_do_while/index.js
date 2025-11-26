// // Variável de controle
// let i = 0
// // While - a condição vem no inicio
// // A condição checa a variável de controle para realizar as iterações
// // O código é executado até que a condição seja falsa
// // O incrementador sempre vem após o código dentro do bloco
// while (i <= 10) {
//   console.log(i)
//   i++
// }

// // Do...While - a condição vem no final
// // O código do bloco é executado
// // O incrementador sempre virá após o código dentro do bloco
// // Depois de executar o bloco, ele testa a condição
// // Enquanto a condição for verdadeira, o loop continua executando
// do {
//   console.log(i)
//   i++
// } while (i <= 20)

function random(num) {
  const numRandom = Math.random() * num + 1
  return Math.floor(numRandom)
}

console.log(random(10))

// const variavel = Math.random() * console.log(variavel)
