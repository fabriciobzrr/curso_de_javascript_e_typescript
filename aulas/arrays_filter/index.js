// Filter
const nums = [1, 2, 3, 4, 54, 54, 23, 34, 432, 543, 21, 31, 21]

const others = nums.filter((n, i, a) => {
  return n < 10
})

// function menorDez(n) {
//   return n < 10
// }

// function maiorDez(n) {
//   return n > 10
// }

const persons = [
  { nome: "Fabricio", idade: 32, sexo: "Masculino" },
  { nome: "Kaylin", idade: 12, sexo: "Feminino" },
  { nome: "Fred", idade: 22, sexo: "Masculino" },
  { nome: "Paul", idade: 10, sexo: "Masculino" },
  { nome: "Ana", idade: 10, sexo: "Masculino" },
  { nome: "Maria", idade: 10, sexo: "Masculino" },
]

const person = persons.filter((obj) => {
  return obj.nome.length <= 5
})

const person50 = persons.filter((obj) => {
  return obj.idade > 20
})
const personEndA = persons.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a")
})
console.log(personEndA)
