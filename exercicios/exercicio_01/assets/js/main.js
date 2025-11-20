// Capturar evento de submit do formulário
const form = document.querySelector("#form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const inputWeigth = document.querySelector("#weight")
  const inputHeight = document.querySelector("#height")
  const inputWeigthValue = Number(inputWeigth.value)
  const inputHeightValue = Number(inputHeight.value)
  if (!inputHeightValue || !inputWeigthValue) {
    setResult(`Peso e/ou altura inválidos`, false)
    return
  }
  const imc = getImc(inputWeigthValue, inputHeightValue)
  const imcLevel = getLevelImc(imc)
  const msg = `Seu IMC é de: ${imc} (${imcLevel})`
  setResult(msg, true)
})

function createP() {
  const p = document.createElement("p")
  return p
}

function getLevelImc(imc) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ]

  if (imc > 39.9) {
    return level[5]
  } else if (imc > 35) {
    return level[4]
  } else if (imc > 30) {
    return level[3]
  } else if (imc > 25) {
    return level[2]
  } else if (imc > 18.5) {
    return level[1]
  } else {
    return level[0]
  }
}

function getImc(weight, height) {
  const imc = weight / height ** 2
  return imc.toFixed(2)
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result")
  result.innerHTML = ``

  const p = createP()

  if (isValid) {
    p.classList.add("result-true")
  } else {
    p.classList.add("result-false")
  }

  p.innerHTML = `${msg}`
  result.appendChild(p)
}
