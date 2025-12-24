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

function ValidateCPF(sentCPF) {
  Object.defineProperty(this, "cleanCPF", {
    get: function () {
      return sentCPF.replace(/\D+/g, "")
    },
  })
}

ValidateCPF.prototype.makeNewCPF = function () {
  const partialCPF = this.cleanCPF.slice(0, -2)
  const digitOne = this.makeDigits(partialCPF)
  const digitTwo = this.makeDigits(partialCPF + digitOne)
  const newCPF = partialCPF + digitOne + digitTwo

  return newCPF
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === "undefined") return false
  if (typeof this.cleanCPF === "null") return false
  if (this.cleanCPF.length !== 11) return false
  if (this.isSequential()) return false

  const makeNewCPF = this.makeNewCPF()

  return makeNewCPF === this.cleanCPF
}

ValidateCPF.prototype.makeDigits = function (partialCPF) {
  const cpfArray = Array.from(partialCPF)
  let regressiveCounter = cpfArray.length + 1
  const result = cpfArray.reduce((accumulator, value) => {
    accumulator = accumulator + regressiveCounter * Number(value)
    regressiveCounter--
    return accumulator
  }, 0)

  const digit = 11 - (result % 11)
  return digit > 9 ? "0" : String(digit)
}

ValidateCPF.prototype.isSequential = function () {
  const sequential = this.cleanCPF[0].repeat(this.cleanCPF.length)
  return sequential === this.cleanCPF
}

const form = document.querySelector("#form-cpf")
const inputCPF = form.querySelector("#input-cpf")
const cpfResult = document.querySelector(".result #cpf")
const containerResult = document.querySelector(".result")

inputCPF.addEventListener("input", function (e) {
  const onlyNumbers = e.target.value.replace(/\D+/g, "")
  inputCPF.value = onlyNumbers
})

form.addEventListener("submit", function (e) {
  containerResult.style.display = "flex"
  const cpf = new ValidateCPF(inputCPF.value)
  if (!cpf.cleanCPF) {
    cpfResult.classList = ""
    cpfResult.textContent = `Digite um número CPF válido.`
  } else {
    if (cpf.validate()) {
      cpfResult.textContent = `O CPF é válido.`
      cpfResult.classList.add("valid")
      cpfResult.classList.remove("invalid")
    } else {
      cpfResult.textContent = `O CPF é inválido.`
      cpfResult.classList.add("invalid")
      cpfResult.classList.remove("valid")
    }
  }
  e.preventDefault()
})
