class ValidateCPF {
  constructor(sentCPF) {
    this.sentCPF = sentCPF.replace(/\D+/g, "")
  }

  generateCPF() {
    const partialCPF = this.sentCPF.slice(0, -2)
    const digitOne = this.makeDigits(partialCPF)
    const digitTwo = this.makeDigits(partialCPF + digitOne)
    const newCPF = partialCPF + digitOne + digitTwo
    return newCPF
  }

  validate() {
    if (!this.sentCPF) return false
    if (this.sentCPF.length !== 11) return false
    if (typeof this.sentCPF === "undefined") return false
    if (this.isSequencial()) return false

    const newCPF = this.generateCPF()

    return newCPF === this.sentCPF
  }

  makeDigits(partialCPF) {
    let regressive = partialCPF.length + 1
    let total = 0

    for (let strNum of partialCPF) {
      total += Number(strNum) * regressive
      regressive--
    }

    // Para percorrer os números do CPF, a variável i deve começar com 0
    // Enquanto i for menor que os números do CPF parcial passado por argumento executa o código
    // Devemos definir uma variável temporária que irá armazenar cada número do CPF parcial
    // Essa variável será multiplicada pela variável regressive (fora do loop) e a cada loop
    // ela será decrescida em 1 até o loop terminar
    // Todos os resultados serão somados a variável total
    //
    // for (let i = 0; i < partialCPF.length; i++) {
    //   let strNum = partialCPF[i]
    //   total += Number(strNum) * regressive
    //   regressive--
    // }

    const digit = 11 - (total % 11)
    return digit > 9 ? "0" : String(digit)
  }

  isSequencial() {
    return this.sentCPF.charAt(0).repeat(this.sentCPF.length) === this.sentCPF
  }
}

const cpf = new ValidateCPF("151.512.339-12")

console.log(cpf.validate())
