class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  falar() {
    console.log("Falando...")
  }

  static voadora() {
    console.log("Voando...")
  }
}
const p1 = new Pessoa("Fred", 32)
// Método de instância
p1.falar()

// Método estático
Pessoa.voadora()
