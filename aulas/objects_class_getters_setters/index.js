// const _topSpeed = Symbol("topSpeed")
// class Car {
//   constructor(brand, model, year, topSpeed) {
//     this.brand = brand
//     this.model = model
//     this.year = year
//     this[_topSpeed] = 0
//   }

//   set topSpeed(valor) {
//     console.log("Acessando o Setter")
//     if (typeof valor !== "number") return
//     if (valor > 250 || valor < 0) return
//     this[_topSpeed] = valor
//   }

//   get topSpeed() {
//     console.log("Acessando o Getter")
//     return this[_topSpeed]
//   }

//   accel() {
//     if (this[_topSpeed] >= 250) return
//     this[_topSpeed]++
//   }

//   brake() {
//     if (this[_topSpeed] <= 0) return
//     this[_topSpeed]--
//   }
// }

// const chevCorvette = new Car("Chevrolet", "Corvette ZR1", 2015)
// // GETTER
// console.log(chevCorvette.topSpeed)

// // SETTER
// chevCorvette.topSpeed = 100

class Person {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ")
    this.nome = valor.shift()
    this.sobrenome = valor.join(" ")
  }
}
const p1 = new Person("Fabricio", "Bezerra")
p1.nomeCompleto = "Fabricio dos Santos Bezerra"
console.log(p1.nomeCompleto)
