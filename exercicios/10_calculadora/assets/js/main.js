function createCalculator() {
  return {
    display: document.querySelector(".display"),

    init() {
      this.noDigits()
      this.clickButtons()
      this.enterButton()
    },

    noDigits() {
      this.display.addEventListener("input", (e) => {
        const el = e.target.value
        this.display.value = el.replace(/[^0-9]/g, "")
      })
    },

    clearDisplay() {
      this.display.value = ""
    },

    backSpace() {
      this.display.value = this.display.value.slice(0, -1)
    },

    showResult() {
      let resultOperation = this.display.value

      try {
        resultOperation = eval(resultOperation)

        if (!resultOperation) {
          console.log(resultOperation)
          alert("Valores inválidos!")
          return
        }

        this.display.value = resultOperation
      } catch (err) {
        alert("Valores inválidos!")
        return
      }
    },

    enterButton() {
      this.display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.showResult()
        }
      })
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target
        if (el.classList.contains("btn-num")) {
          this.btnForDisplay(el.innerText)
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
      })
    },

    btnForDisplay(value) {
      this.display.value += value
    },
  }
}

const calculator = createCalculator()
calculator.init()
