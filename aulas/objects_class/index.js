class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  falar() {
    console.log(`${this.nome} falando...`)
  }
}

const fred = new Pessoa("Fabricio", "Bezerra")
console.log(fred)
fred.falar()
