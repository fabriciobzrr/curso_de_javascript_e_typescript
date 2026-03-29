function ValidateCPF(sentCPF) {
  this.sentCPF = sentCPF.replace(/\D+/g, "")
}

ValidateCPF.prototype.validate = function () {
  if (this.sentCPF.length !== 11) return false
  if (typeof this.sentCPF === "undefined") return false
  if (this.isSequencial()) return false

  const partialCPF = this.sentCPF.slice(0, -2)
  const digitOne = this.makeDigits(partialCPF)
  const digitTwo = this.makeDigits(partialCPF + digitOne)

  const newCPF = partialCPF + digitOne + digitTwo

  return this.sentCPF === newCPF
}

ValidateCPF.prototype.makeDigits = function (partialCPF) {
  const cpfArray = Array.from(partialCPF)
  let regCount = cpfArray.length + 1
  const result = cpfArray.reduce((acum, value) => {
    acum += regCount * value
    regCount--
    return acum
  }, 0)

  const digit = 11 - (result % 11)
  return digit > 9 ? "0" : String(digit)
}

ValidateCPF.prototype.isSequencial = function () {
  return this.sentCPF.charAt(0).repeat(this.sentCPF.lenght) === this.sentCPF
}

// Instanciando objeto
const cpf = "054.254.195-54"
const testCPF = new ValidateCPF(cpf)
if (testCPF.validate()) {
  console.log("Válido")
} else {
  console.log("Inválido")
}
