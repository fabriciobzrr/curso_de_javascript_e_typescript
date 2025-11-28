const elementos = [
  { tag: "p", texto: "Este é um Paragrafo" },
  { tag: "div", texto: "Esta é uma Div" },
  { tag: "footer", texto: "Este é um Footer" },
  { tag: "section", texto: "Esta é uma Section" },
]
const div = document.createElement("div")
const container = document.querySelector(".container")

// Usando FOREACH
elementos.forEach((elements) => {
  let { tag, texto: text } = elements
  let el = document.createElement(tag)
  div.appendChild(el)
  el.textContent = text
})

// Usando FOR tradicional
for (let i = 0; i < elementos.length; i++) {
  let { tag, texto: text } = elementos[i]
  let el = document.createElement(tag)
  div.appendChild(el)
  el.textContent = text
}

container.appendChild(div)
