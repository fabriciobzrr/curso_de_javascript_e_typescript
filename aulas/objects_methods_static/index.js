function teste() {
  console.log("Teste")
}

class Celular {
  constructor(marca) {
    this.marca = marca
    this.ligado = true
    teste()
  }

  // Método de instância
  desliga() {
    this.ligado = false
  }

  // Método estático
  static changeBattery() {
    console.log(this)
    console.log("Bateria trocada!")
  }
}

const cell1 = new Celular("Siemens")
console.log(cell1)
Celular.changeBattery()
