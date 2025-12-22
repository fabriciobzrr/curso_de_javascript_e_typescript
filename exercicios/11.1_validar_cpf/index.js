class ValidarCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/g, ""),
    })
  }

  sequencial() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digitOne = ValidarCPF.geraDigito(cpfSemDigitos)
    const digitTwo = ValidarCPF.geraDigito(cpfSemDigitos + digitOne)
    this.novoCpf = cpfSemDigitos + digitOne + digitTwo
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0
    let reverse = cpfSemDigitos.length + 1
    for (let stringNumerica of cpfSemDigitos) {
      total = total + reverse * Number(stringNumerica)
      reverse--
    }
    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : "0"
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== "string") return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.sequencial()) return false
    this.geraNovoCpf()
    return this.novoCpf === this.cpfLimpo
  }
}

const cpf = new ValidarCPF("964.983.190-89")

if (cpf.valida()) {
  console.log("CPF Válido")
} else {
  console.log("CPF Inválido")
}
