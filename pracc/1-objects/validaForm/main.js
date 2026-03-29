class ValidateForm {
  constructor() {
    this.formulario = document.querySelector(".formulario")
    this.events()
  }

  events() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const checkFields = this.checkFields()
    const checkPassword = this.checkPassword()

    if (checkFields && checkPassword) {
      alert("Enviado!")
      this.formulario.submit()
    }
  }

  checkFields() {
    let isValid = true
    let fields = this.formulario.querySelectorAll(".validate")

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove()
    }

    for (let field of fields) {
      const label = field.previousElementSibling.innerText

      if (!field.value) {
        this.makeNewError(field, `Campo "${label}" não pode estar em branco.`)
        isValid = false
      }

      if (field.classList.contains("cpf")) {
        if (!this.validateCPF(field)) isValid = false
      }

      if (field.classList.contains("user")) {
        if (!this.validateUser(field)) isValid = false
      }
    }
    return isValid
  }

  validateUser(field) {
    const user = field.value
    let isValid = true
    if (user.length < 4 || user.length > 16) {
      this.makeNewError(field, "Usuário precisa ter entre 4 e 16 caracteres.")
      isValid = false
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.makeNewError(
        field,
        "Nome de usuário pode ter somente letras e números.",
      )
      isValid = false
    }
    return true
  }

  validateCPF(field) {
    const cpf = new ValidateCPF(field.value)

    if (!cpf.validate()) {
      this.makeNewError(field, "Número de CPF inválido.")
      return false
    }

    return true
  }

  makeNewError(field, message) {
    const div = document.createElement("div")
    div.innerText = message
    div.classList.add("error-text")
    field.insertAdjacentElement("afterend", div)
  }

  checkPassword() {
    let isValid = true

    const pass = this.formulario.querySelector(".password")
    const rePass = this.formulario.querySelector(".retry-password")

    if (pass.value !== rePass.value) {
      this.makeNewError(pass, "Senha e repetir senha devem ser iguais.")
      this.makeNewError(rePass, "Senha e repetir senha devem ser iguais.")
      isValid = false
    }

    if (pass.value.length < 8 || pass.value.length > 32) {
      this.makeNewError(pass, "Senha precisa ter entre 8 e 32 caracteres.")
      this.makeNewError(rePass, "Senha precisa ter entre 8 e 32 caracteres.")
      isValid = false
    }
    return isValid
  }
}

const validateForm = new ValidateForm()
