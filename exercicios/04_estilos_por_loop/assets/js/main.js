const paragrafos = document.querySelectorAll(".container p")
const styleBody = getComputedStyle(document.body)
const bgBody = styleBody.backgroundColor
console.log(bgBody)

for (let p of paragrafos) {
  p.style.backgroundColor = bgBody
  p.style.padding = "1rem"
  p.style.color = "#ff0"
}
