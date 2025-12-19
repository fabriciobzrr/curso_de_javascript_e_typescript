// Reduce
const nums = [1, 2, 3, 4, 54, 54, 23, 34, 432, 543, 21, 31, 21]

const num = nums.reduce((a, n) => {
  if (n % 2 === 0) a.push(n)
  return a
}, [])

const n1 = nums.reduce((a, n) => {
  a.push(n * 2)
  return a
}, [])
// console.log(num, n1)

const pessoas = [
  { nome: "Aline", idade: 45 },
  { nome: "Miguel", idade: 25 },
  { nome: "Gênesis", idade: 41 },
  { nome: "Karolliny", idade: 63 },
  { nome: "Donatello", idade: 19 },
]
const pessoa = pessoas.reduce((a, n) => {
  if (a.idade > n.idade) return a
  return n
})

console.log(pessoa)
