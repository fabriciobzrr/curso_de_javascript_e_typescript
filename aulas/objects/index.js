const pessoa = {
  nome: "Fred",
  sobrenome: "Santos",
}
// console.log(pessoa["nome"], pessoa["sobrenome"])

const person = new Object()
person.nome = "Fred"
person.sobrenome = "Bezerra"
person.age = 30
person.falar = function () {
  return this.nome, "está dizendo seu nome!"
}
person.getAge = function () {
  return new Date().getFullYear() - this.age
}

for (const a in person) {
  console.log(person[a])
}
