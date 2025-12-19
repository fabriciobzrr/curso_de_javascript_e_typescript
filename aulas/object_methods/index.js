const mouse = { nome: "Mouse", marca: "Rapoo", preco: 299 }
const teclado = { ...mouse, switch: "gateron", corSwitch: "yellow" }
const mousepad = Object.assign({}, teclado, {
  nome: "Mousepad",
  marca: "Artizan",
  preco: 399,
})
Object.defineProperty(mouse, "nome", {
  writable: true,
  value: "Cleaner",
})
mouse.nome = "ZZZZZZZ"
console.log(mouse)
// console.log(Object.getOwnPropertyDescriptor(mouse, "nome"))
// console.log(teclado)
// console.log(mousepad)
for (let arr of Object.entries(mouse)) {
  console.log(arr)
}
