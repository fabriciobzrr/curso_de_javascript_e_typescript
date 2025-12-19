function Pessoa(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome

  Object.defineProperty(this, "idade", {
    enumerable: true,
    value: idade,
    writable: true,
    configurable: false,
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: idade,
      writable: true,
      configurable: false,
    },
    sobrenome: {
      enumerable: true,
      value: idade,
      writable: true,
      configurable: false,
    },
    idade: {
      enumerable: true,
      value: idade,
      writable: true,
      configurable: false,
    },
  })
}

const personFred = new Pessoa("Fred", "AltJ", 45)
personFred.idade = 32
console.log(personFred)

for (let chave in personFred) {
  console.log(chave)
}
