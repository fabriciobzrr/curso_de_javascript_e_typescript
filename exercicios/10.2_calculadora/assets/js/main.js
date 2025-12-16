function Calculator() {
  this.display = document.querySelector(".display")
  this.startContainer = document.querySelector(".start-container")
  this.calculator = document.querySelector(".calculator")

  this.init = () => {
    this.clicksCapture()
    this.keyCapture()
    this.noDigits()
  }

  this.clicksCapture = () => {
    document.addEventListener("click", (el) => {
      const element = el.target
      // Botões da calculadora
      if (element.classList.contains("btn-num")) {
        this.numberDisplay(element)
      }
      // Botão de limpar
      if (element.classList.contains("btn-clear")) {
        this.clearDisplay()
      }
      // Botão backspace
      if (element.classList.contains("btn-del")) {
        this.backSpace()
      }
      // Realiza operação
      if (element.classList.contains("btn-eq")) {
        this.calcOperation()
      }
      // Inicia a calculadora
      if (element.classList.contains("start-calc")) {
        this.startContainer.classList.toggle("hide")
        this.calculator.classList.toggle("hide")
      }
      // Fecha a calculadora
      if (element.classList.contains("btn-close")) {
        this.startContainer.classList.toggle("hide")
        this.calculator.classList.toggle("hide")
      }
    })
  }
  this.noDigits = () => {
    this.display.addEventListener("input", (e) => {
      const display = this.display.value.replace(/[^0-9+\-*/.]/g, "")
      this.display.value = display
    })
  }
  this.keyCapture = () => {
    this.display.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.calcOperation()
      }
    })
  }
  this.numberDisplay = (el) => {
    this.display.value += el.innerText
    this.display.focus()
  }
  this.clearDisplay = () => (this.display.value = "")
  this.backSpace = () => (this.display.value = this.display.value.slice(0, -1))
  this.calcOperation = () => {
    try {
      const operation = eval(this.display.value)
      if (!operation) {
        alert("Operação inválida!")
        return
      }

      this.display.value = operation
    } catch (error) {
      alert("Operação inválida!")
      return
    }
  }
}

const calculadora = new Calculator()
calculadora.init()
