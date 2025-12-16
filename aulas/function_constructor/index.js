function Person(nome, idade) {
  // Atributos ou métodos privados
  const ID = 32981209
  const metodoInterno = (function () {
    console.log("Olá mundo!")
  })()(
    // Atributos ou métodos públicos
    (this.nome = nome)
  )
  this.idade = idade
}

const person1 = new Person("Fred", 32)

console.log(person1.nome, person1.idade)
