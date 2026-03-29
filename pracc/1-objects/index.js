class Person {
  constructor(name, surname, height, weight) {
    this.name = name
    this.surname = surname
    this.height = height
    this.weight = weight
  }

  get getName() {
    return this.name
  }

  set setName(name) {
    this.name = name
  }

  get getSurname() {
    return this.surname
  }

  set setSurname(surname) {
    this.surname = surname
  }

  get getHeight() {
    return this.height
  }

  set setHeight(height) {
    this.height = height
  }

  get getWeight() {
    return this.weight
  }

  set setWeight(weight) {
    this.weight = weight
  }

  calcImc() {
    return this.weight / Math.pow(this.height, 2)
  }

  get getFullName() {
    return `${this.name} ${this.surname}`
  }
}

const name = "Fabricio"
const surname = "Bezerra"
const height = 1.81
const weight = 65

const person = new Person(name, surname, height, weight)

console.log(person.calcImc().toFixed(2))
console.log(person.getFullName)
