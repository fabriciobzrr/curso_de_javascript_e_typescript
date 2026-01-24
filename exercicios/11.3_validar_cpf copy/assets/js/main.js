// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número dígito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número dígito for maior que 9, consideramos 0.
*/

class ValidateCPF {
  constructor(sentCPF) {
    Object.defineProperty(this, "cleanCPF", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: sentCPF.replace(/\D+/g, ""),
    })
  }

  isValid() {
    if (!this.cleanCPF) return false
    if (typeof this.cleanCPF === "undefined") return false
    if (typeof this.cleanCPF === "null") return false
    if (this.cleanCPF.length !== 11) return false
    if (this.isSequence()) return false
    const newCPF = this.makeNewCPF()

    return newCPF === this.cleanCPF
  }

  makeDigits(cpfPartial) {
    let total = 0
    let reverse = cpfPartial.length + 1
    for (let stringNum of cpfPartial) {
      total = total + reverse * Number(stringNum)
      reverse--
    }
    const digit = 11 - (total % 11)

    return digit > 9 ? "0" : String(digit)
  }

  makeNewCPF() {
    const cpfPartial = this.cleanCPF.slice(0, -2)
    const digitOne = this.makeDigits(cpfPartial)
    const digitTwo = this.makeDigits(cpfPartial + digitOne)

    const newCPF = cpfPartial + digitOne + digitTwo

    return newCPF
  }

  isSequence() {
    const sequence = this.cleanCPF.charAt(0).repeat(this.cleanCPF.length)

    return sequence === this.cleanCPF
  }
}

const cpfForm = document.querySelector("#form-cpf")
const inputCPF = document.querySelector("#input-cpf")
const resultContainer = document.querySelector(".result")
const cpfText = document.querySelector("#cpf")

inputCPF.addEventListener("input", function (e) {
  const onlyNumbers = e.target.value.replace(/\D+/g, "")
  e.target.value = onlyNumbers
})

cpfForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const cpf = new ValidateCPF(inputCPF.value)

  resultContainer.style.display = "flex"

  if (!cpf.cleanCPF) {
    cpfText.textContent = `Digite um CPF válido!`
    cpfText.classList.remove("valid")
    cpfText.classList.remove("invalid")
  } else {
    if (cpf.isValid()) {
      cpfText.textContent = `O CPF é válido!`
      cpfText.classList.add("valid")
      cpfText.classList.remove("invalid")
    } else {
      cpfText.textContent = `O CPF é inválido!`
      cpfText.classList.add("invalid")
      cpfText.classList.remove("valid")
    }
  }
})
