function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desc = function (perc) {
  this.preco = this.preco - this.preco * (perc / 100)
}
Produto.prototype.acresc = function (perc) {
  this.preco = this.preco + this.preco * (perc / 100)
}

const mouse = new Produto("Mouse", 400)
// mouse.desc(10)
mouse.acresc(20)
console.log(mouse)

const teclado = {
  nome: "Teclado",
  preco: 200,
}

Object.setPrototypeOf(teclado, Produto.prototype)
teclado.acresc(10)
console.log(teclado)

const fone = Object.create(Produto.prototype, {
  // id: {
  //   writable: true,
  //   value: 0,
  //   enumerable: true,
  //   configurable: true,
  // },
  nome: {
    writable: true,
    value: "Fone",
    enumerable: true,
    configurable: true,
  },
  preco: {
    writable: true,
    value: 249,
    enumerable: true,
    configurable: true,
  },
})
// fone.nome = "Fone"
// fone.preco = 250
console.log(fone)
