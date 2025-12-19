// // Map
// const nums = [1, 2, 3, 4, 54, 54, 23, 34, 432, 543, 21, 31, 21]

// const num = nums.map((n) => {
//   return n * 2
// })

// console.log(num)

const pessoas = [
  { nome: "Aline", idade: 45 },
  { nome: "Miguel", idade: 25 },
  { nome: "Gênesis", idade: 41 },
  { nome: "Karolliny", idade: 63 },
  { nome: "Donatello", idade: 19 },
]

const pessoa = pessoas.map((p) => {
  const arr = p.nome
  return arr
})

const person = pessoa.join(", ")

const idade = pessoas.map((n) => {
  return { idade: n.idade }
})

const objId = pessoas.map((n, i) => {
  return { id: i, nome: n.nome, idade: n.idade }
})
console.log(objId)
