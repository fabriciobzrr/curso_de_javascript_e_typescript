class ValidateForm {
  constructor() {
    this.form = document.querySelector(".form")
    this.events()
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const checkFields = this.checkFields()
    const passwordValid = this.validatePassword()

    console.log(checkFields, passwordValid)

    if (checkFields && passwordValid) {
      alert("Formulário enviado.")
      this.form.submit()
    }
  }

  validatePassword() {
    let valid = true
    const password = this.form.querySelector(".password")
    const retryPassword = this.form.querySelector(".retry-password")

    if (password.value !== retryPassword.value) {
      valid = false
      this.createError(
        password,
        "Campos senha e repetir senha precisam ser iguais."
      )
      this.createError(
        retryPassword,
        "Campos senha e repetir senha precisam ser iguais."
      )
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false
      this.createError(password, "Senha deve ter entre 6 e 12 caracteres.")
    }
    return valid
  }

  checkFields() {
    let valid = true

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove()
    }

    for (let field of this.form.querySelectorAll(".valid")) {
      const label = field.previousElementSibling.innerText
      if (!field.value) {
        valid = false
        this.createError(field, `Campo "${label}" não pode estar em branco.`)
      }
      if (field.classList.contains("cpf")) {
        if (!this.validateCPF(field)) valid = false
      }
      if (field.classList.contains("user")) {
        if (!this.validateUser(field)) valid = false
      }
    }
    return valid
  }

  validateCPF(field) {
    const cpf = new ValidarCPF(field.value)

    if (!cpf.valida()) {
      this.createError(field, "O CPF é inválido.")
      return false
    }

    return true
  }

  validateUser(field) {
    const user = field.value
    let valid = true

    if (user.length < 3 || user.length > 12) {
      this.createError(field, "Usuário deve ter entre 3 e 12 caracteres.")
    }

    if (!user.match(/[a-zA-Z0-9]+/g)) {
      this.createError(field, "Usuário deve conter apenas letras e/ou números.")
    }
    return valid
  }

  createError(fields, msg) {
    const div = document.createElement("div")
    div.innerHTML = msg
    div.classList.add("error-text")
    fields.insertAdjacentElement("afterend", div)
  }
}

const validateForm = new ValidateForm()
