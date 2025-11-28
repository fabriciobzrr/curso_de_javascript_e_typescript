// Selecionando elementos
const timerElement = document.querySelector("#timer")
const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnClear = document.querySelector("#clear")
let seconds = 0
let timer

btnStart.addEventListener("click", (e) => {
  startTimer()
})
btnStop.addEventListener("click", (e) => {
  stopTimer()
})
btnClear.addEventListener("click", (e) => {
  clearTimer()
})

// Funções
function getSeconds(seconds) {
  const newDate = new Date(seconds * 1000)
  return newDate.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  })
}

function startTimer() {
  timer = setInterval(() => {
    seconds++
    timerElement.innerHTML = getSeconds(seconds)
  }, 1000)
}

function stopTimer() {
  clearInterval(timer)
}

function clearTimer() {
  clearInterval(timer)
  timerElement.innerHTML = "00:00:00"
}
