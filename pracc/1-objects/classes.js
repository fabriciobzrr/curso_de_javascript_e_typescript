class Conta {
  #balance

  constructor(number, holder, balance) {
    this.number = number
    this.holder = holder
    this.#balance = balance
  }

  get balance() {
    return this.#balance
  }

  withdraw(value) {
    return (this.#balance -= value)
  }

  toString() {
    return `Conta: ${this.number}, Proprietário: ${this.holder}, Saldo: R$${this.balance.toFixed(2)}`
  }
}

class ContaCorrente extends Conta {
  #balance
  constructor(number, holder, balance, tax) {
    super(number, holder, balance)
    this.tax = tax
  }

  getTax() {
    return this.tax
  }

  setTax(value) {
    this.tax = value
  }

  withdraw(value) {
    return (this.#balance -= value + this.tax)
  }
}

const p1 = new Conta(12, "Fabricio", 1000)
p1.balance = "Fred"
p1.withdraw(500)
console.log(p1.toString())

const p2 = new ContaCorrente(13, "Fabricio", 1000, 5)
p2.withdraw(500)
console.log(p2.toString())
