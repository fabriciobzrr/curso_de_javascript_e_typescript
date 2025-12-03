function createCalculator() {
  return {
    display: document.querySelector(".display"),
    calculator: document.querySelector(".calculator"),
    startContainer: document.querySelector(".start-container"),

    init() {
      this.clickButtons()
      this.enterButton()
      this.noDigits()
    },

    clearDisplay() {
      this.display.value = ""
    },

    backSpace() {
      this.display.value = this.display.value.slice(0, -1)
    },

    btnToDisplay(value) {
      this.display.value += value
    },

    enterButton() {
      this.display.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.showResult()
        }
      })
    },

    noDigits() {
      this.display.addEventListener("input", (e) => {
        const inputValue = this.display.value.replace(/[^0-9+\-*/.]/g, "")
        this.display.value = inputValue
      })
    },

    showResult() {
      let operation = this.display.value

      operation = eval(operation)

      try {
        if (!operation) {
          alert("Operação inválida!")
          return
        }

        this.display.value = operation
      } catch (error) {
        alert("Operação inválida!")
        return
      }
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target
        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText)
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay()
        }

        if (el.classList.contains("btn-del")) {
          this.backSpace()
        }

        if (el.classList.contains("btn-eq")) {
          this.showResult()
        }

        if (el.classList.contains("btn-close")) {
          this.calculator.classList.toggle("hide")
          this.startContainer.classList.toggle("hide")
        }

        if (el.classList.contains("start-calc")) {
          this.startContainer.classList.toggle("hide")
          this.calculator.classList.toggle("hide")
          this.display.value = ""
        }
      })
    },
  }
}

const myCalculator = createCalculator()
myCalculator.init()
