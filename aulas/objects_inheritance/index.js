class Mouse {
  constructor(nome, isOn) {
    this.nome = nome
    this.isOn = false
  }

  on() {
    if (this.isOn) {
      console.log(`${this.nome} está ligado...`)
      return
    }
    this.isOn = true
  }

  off() {
    if (!this.isOn) {
      console.log(`${this.nome} está desligado...`)
      return
    }
    this.isOn = false
  }
}

class MouseGamer extends Mouse {
  constructor(nome, rate, dpi) {
    super(nome)
    this.rate = rate
    this.dpi = dpi
  }
}

class MouseGamer8k extends Mouse {
  constructor(nome, polling8k) {
    super(nome)
    this.polling8k = polling8k
  }
  on() {
    console.log("Ligado!")
  }
}

const m1 = new Mouse("Mouse Escritorio")
const rapoo = new MouseGamer("Rapoo VT0Pro")
const xlite = new MouseGamer8k("Xlite 8k", true)
console.log(m1)
console.log(rapoo)
console.log(xlite)
xlite.on()
