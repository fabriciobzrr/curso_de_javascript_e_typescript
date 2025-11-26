// o for in lê os índices ou chaves do objeto
const persons = { nome: "Fred", sobrenome: "Bezerra", idade: 32 }

for (let person in persons) {
  console.log(person + ": " + persons[person])
}
