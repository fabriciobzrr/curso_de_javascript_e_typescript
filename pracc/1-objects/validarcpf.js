// 705.484.450-52
function ValidateCPF(sentCpf) {
  Object.defineProperty(this, "cleanCpf", {
    get: function () {
      return sentCpf.replace(/\D+/g, "")
    },
  })
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCpf === "undefined") return false
  if (this.cleanCpf.length !== 11) return false
  if (this.isSequencial()) return false

  const partialCpf = this.cleanCpf.slice(0, -2)

  const digitOne = this.makeDigit(partialCpf)
  const digitTwo = this.makeDigit(partialCpf + digitOne)

  const newCpf = partialCpf + digitOne + digitTwo
  return newCpf === this.cleanCpf
}

ValidateCPF.prototype.makeDigit = function (partialCpf) {
  const arrayCpf = Array.from(partialCpf)
  let regressive = arrayCpf.length + 1
  const result = arrayCpf.reduce((ac, value) => {
    ac += regressive * Number(value)
    regressive--
    return ac
  }, 0)
  const digit = 11 - (result % 11)
  return digit > 9 ? "0" : String(digit)
}
ValidateCPF.prototype.isSequencial = function () {
  return (
    this.cleanCpf[0].charAt(0).repeat(this.cleanCpf.length) === this.cleanCpf
  )
}

const cpf = new ValidateCPF("111.111.111-11")
if (cpf.validate()) {
  console.log(`O CPF ${cpf.cleanCpf} válido`)
} else {
  console.log(`O CPF ${cpf.cleanCpf} inválido`)
}
