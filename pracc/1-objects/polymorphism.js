function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log("Saldo insuficiente: R$" + this.saldo.toFixed(2))
    return
  }

  this.saldo -= valor
  this.verSaldo().toFixed(2)
}
Conta.prototype.depositar = function (valor) {
  this.saldo += valor
  this.verSaldo().toFixed(2)
}
Conta.prototype.verSaldo = function () {
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}
ContaC.prototype = Object.create(Conta.prototype)
ContaC.prototype.constructor = ContaC

ContaC.prototype.sacar = function (valor) {
  const res = this.saldo + this.limite
  if (valor > res) {
    console.log("Saldo insuficiente: " + this.saldo)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

const conta = new Conta(11, 22, 100)
conta.sacar(101)

const cc = new ContaC(11, 22, 0, 100)
cc.sacar(90)
