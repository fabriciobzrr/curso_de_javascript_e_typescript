const form = document.querySelector("form")
const div = document.querySelector("#div1")
const pessoas = []

function sendInfo(e) {
  e.preventDefault()
  const nome = document.querySelector("input#name")
  const lastname = document.querySelector("input#lastname")
  const weight = document.querySelector("input#weight")
  const height = document.querySelector("input#height")
  const nomeValue = nome.value
  const lastNameValue = lastname.value
  const weightValue = weight.value
  const heightValue = height.value
  pessoas.push({
    nomeValue,
    lastNameValue,
    weightValue,
    heightValue,
  })
  div.innerHTML += `<p>${nomeValue} ${lastNameValue} ${weightValue} ${heightValue}</p>`
  console.log(pessoas)
}

form.addEventListener("submit", sendInfo)
