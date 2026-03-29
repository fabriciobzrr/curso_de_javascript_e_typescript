function Pessoa(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

Pessoa.prototype.saudacao = function () {
  return `Olá, me chamo ${this.firstName} ${this.lastName}`
}

const p1 = new Pessoa("Fabricio", "Bezerra")
const p2 = new Pessoa("Maria", "Silva")
console.log(p1.saudacao())
console.log(p2.saudacao())
