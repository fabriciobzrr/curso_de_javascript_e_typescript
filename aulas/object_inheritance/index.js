// Produto -> desconto e acrescimo
// Mouse = connectivity, Teclado = Switch
function Product(nome, preco) {
  this.nome = nome
  this.preco = preco
}

function Mouse(nome, preco, connectivity) {
  Product.call(this, nome, preco)
  this.connectivity = connectivity
}
Mouse.prototype = Object.create(Product.prototype)
Mouse.prototype.constructor = Mouse

Mouse.prototype.acresc = (percent) => {
  this.preco = this.preco + this.preco * (percent / 100)
}
Mouse.prototype.desc = (percent) => {
  this.preco = this.preco - this.preco * (percent / 100)
}

function Teclado(nome, preco, switchType, estoque) {
  Product.call(this, nome, preco)
  this.switchType = switchType

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque
    },
    set: function (valor) {
      if (typeof valor !== "number") return
      estoque = valor
    },
  })
}

Teclado.prototype = Object.create(Product.prototype)
Teclado.prototype.constructor = Teclado

const rapoo = new Mouse("vt0Pro", 299, "wireless")
const gamakay = new Teclado("mk68", 399, "Gateron Yellow", 30)

rapoo.acresc(20)
console.log(rapoo)
console.log(gamakay)

// function Teclado(nome, preco, switchType) {}
