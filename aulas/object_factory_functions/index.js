const speak = {
  speak() {
    console.log(this.nome + ", Está dizendo: Olá!")
  },
}
const correr = {
  correr() {
    console.log(this.nome + ", Está correndo...")
  },
}
const deitar = {
  deitar() {
    console.log(this.nome + ", Está descansando...")
  },
}

const pessoaPrototype = Object.assign({}, speak, correr, deitar)

function criaPessoa(nome, sobrenome, age) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
    age: { value: age },
  })
}

// function criaPessoa(nome, sobrenome, age) {
//   const pessoaPrototype = {
//     speak() {
//       console.log(this.nome + ", Está dizendo: Olá!")
//     },
//     correr() {
//       console.log(this.nome + ", Está correndo...")
//     },
//     deitar() {
//       console.log(this.nome + ", Está descansando...")
//     },
//   }
//   return Object.create(pessoaPrototype, {
//     nome: { value: nome },
//     sobrenome: { value: sobrenome },
//     age: { value: age },
//   })
// }

const pessoa = criaPessoa("Fred", "Ulisses", 30)
console.log(pessoa)
