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
function ValidaCpf(cpfEnviado) {
  // this.cpfEnviado = cpfEnviado
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "")
    },
  })
}

ValidaCpf.prototype.validate = function () {
  // Valida se recebeu o CPF na função
  if (typeof this.cpfLimpo === "undefined" || typeof this.cpfLimpo === "null")
    return false
  // Valida se o CPF recebido contém 11 dígitos
  if (this.cpfLimpo.length !== 11) return false
  // Valida se o CPF o mesmo número em sequência
  if (this.isSequencial()) return false

  // Pega o Array retornado com os números do CPF e remove os 2 últimos dígitos, restando apenas 9
  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digitOne = this.makeDigits(cpfParcial)
  const digitTwo = this.makeDigits(cpfParcial + digitOne)

  const newCpf = cpfParcial + digitOne + digitTwo
  return newCpf === this.cpfLimpo
}

ValidaCpf.prototype.makeDigits = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial)

  let cpfRegressive = cpfArray.length + 1
  const digit = cpfArray.reduce((ac, val) => {
    ac += cpfRegressive * Number(val)
    cpfRegressive--
    return ac
  }, 0)
  let returnDigit = 11 - (digit % 11)
  return returnDigit > 9 ? "0" : String(returnDigit)
}

ValidaCpf.prototype.isSequencial = function () {
  const sequency = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequency === this.cpfLimpo
}

const cpfInput = document.querySelector("#cpf")
const btnEnviar = document.querySelector("#btn-enviar")
const resultElement = document.querySelector("#result")

btnEnviar.addEventListener("click", function () {
  const cpf = new ValidaCpf(cpfInput.value)
  if (cpf.validate()) {
    resultElement.classList.add("isValid")
    resultElement.classList.remove("isInvalid")
    resultElement.textContent = `CPF Válido`
  } else {
    resultElement.classList.add("isInvalid")
    resultElement.classList.remove("isValid")
    resultElement.textContent = `CPF Inválido`
  }
})
