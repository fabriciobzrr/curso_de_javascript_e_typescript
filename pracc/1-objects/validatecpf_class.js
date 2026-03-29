class ValidateCPF {
  constructor(sentCPF) {
    this.sentCPF = sentCPF.replace(/\D+/g, "")
  }

  genNewCPF() {
    const parcialCPF = this.sentCPF.slice(0, -2)
    const oneDigit = ValidateCPF.makeDigits(parcialCPF)
    const twoDigit = ValidateCPF.makeDigits(parcialCPF + oneDigit)
    this.newCPF = parcialCPF + oneDigit + twoDigit
  }

  validate() {
    if (typeof this.sentCPF === "undefined") return false
    if (!this.sentCPF) return false
    if (this.sentCPF.length !== 11) return false
    if (this.isSequencial()) return false
    this.genNewCPF()
    return this.newCPF === this.sentCPF
  }

  static makeDigits(partialCPF) {
    let total = 0
    let regressive = partialCPF.length + 1

    for (let stringNum of partialCPF) {
      total += regressive * Number(stringNum)
      regressive--
    }

    const digit = 11 - (total % 11)
    return digit > 9 ? "0" : String(digit)

    // const arrayCPF = Array.from(partialCPF)
    // let regressive = arrayCPF.length + 1
    // const result = arrayCPF.reduce((ac, val) => {
    //   ac += regressive * val
    //   regressive--
    //   return ac
    // }, 0)

    // const digit = 11 - (result % 11)
    // return digit > 9 ? "0" : String(digit)
  }

  isSequencial() {
    return this.sentCPF.charAt(0).repeat(this.sentCPF.length) === this.sentCPF
  }
}

const testCPF = new ValidateCPF("054.254.195-54")
if (testCPF.validate()) {
  console.log("CPF válido!")
} else {
  console.log("CPF inválido!")
}
