function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (value) {
  this.preco += value
}
Produto.prototype.desconto = function (value) {
  this.preco -= value
}

function Mouse(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}
Mouse.prototype = Object.create(Produto.prototype)
Mouse.prototype.constructor = Mouse

const logitech = new Mouse("G Pro", 500, "Branco")
console.log(logitech)
