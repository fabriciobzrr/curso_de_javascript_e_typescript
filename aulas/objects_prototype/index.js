// objectA tem um protótipo chamado Object.prototype
const objectA = {
  chaveA: "AQUI",
  // __proto__: Object.prototype
}
const objectB = {
  chaveB: "NOW",
  // __proto__: Object.prototype
}
const objectC = {
  chaveC: "AGORA",
  // __proto__: Object.prototype
}
console.log(objectA.__proto__ === Object.prototype) // True
Object.getPrototypeOf(objectB)
Object.setPrototypeOf(objectB, objectA)
Object.setPrototypeOf(objectC, objectB)
console.log(objectC.chaveB)
