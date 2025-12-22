// Superclass/Classe Pai/Classe Mãe
function Conta(agency, account, balance) {
  this.agency = agency
  this.account = account
  this.balance = balance
}

Conta.prototype.withdraw = function (valueNum) {
  if (this.balance <= valueNum) {
    console.log(`Saldo insuficiente: ${this.balance.toFixed(2)}`)
    return
  }
  this.balance -= valueNum
  console.log("Saque realizado com sucesso!")
  this.seeBalance()
}

Conta.prototype.deposit = function (valueNum) {
  this.balance += valueNum
  console.log("Depósito realizado com sucesso!")
  this.seeBalance()
}

Conta.prototype.seeBalance = function () {
  console.log(
    `AG/C: ${this.agency}/${this.account} - Saldo de R$ ${this.balance.toFixed(
      2
    )}`
  )
}

function ContaCorrente(agency, account, balance, limit) {
  Conta.call(this, agency, account, balance)
  this.limit = limit
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.withdraw = function (valueNum) {
  if (this.balance + this.limit <= valueNum) {
    console.log(`Saldo insuficiente: ${this.balance.toFixed(2)}`)
    return
  }
  this.balance -= valueNum
  console.log("Saque realizado com sucesso!")
  this.seeBalance()
}

function ContaPoupanca(agency, account, balance) {
  Conta.call(this, agency, account, balance)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaCorrent = new ContaCorrente(123, 111, 0, 500)
contaCorrent.withdraw(400)
console.log(contaCorrent)

const contaPoupanca = new ContaPoupanca(111, 112, 0)
contaPoupanca.withdraw(400)
console.log(contaPoupanca)
