function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  let privEstoque = estoque
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return privEstoque
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Valor inválido!")
      }
      privEstoque = valor
    },
  })
}

const p1 = new Produto("Camisa", 100, 5)
p1.estoque = "fjdkjsfs"

console.log(p1.estoque)
