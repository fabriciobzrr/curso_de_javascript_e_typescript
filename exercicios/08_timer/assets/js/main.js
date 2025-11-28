// Selecionando elementos
const timerElement = document.querySelector(".timer")
const buttonsAct = document.querySelectorAll("button")
let seconds = 0
let timer

// Eventos

// Faz um loop (forEach) nos botões e adiciona um escutador de eventos para cada botão.
// A estrutura de condição retorna a funcionalidade de cada botão.
// Funciona também com: FOR tradicional, FOR OF, WHILE, DO...WHILE.
buttonsAct.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Funcionalidade do botão iniciar.
    // Zera o contador caso já tenha um e chama a função que inicia o timer.
    if (button.classList.contains("start")) {
      clearInterval(timer)
      startTimer()
      timerElement.classList.remove("paused")
      // Funcionalidade do botão pausar/parar.
      // Para o timer no tempo que já foi corrido e adiciona a cor vermelha ao texto indicando a pausa.
    } else if (button.classList.contains("stop")) {
      clearInterval(timer)
      timerElement.classList.add("paused")
      // Funcionalidade do botão zerar.
      // Zera o timer do relógio, o texto impresso e os segundos contados.
      // Volta ao estado inicial do contador.
      // Pisca em azul para indicar que foi realizada a limpeza do timer para iniciar uma nova contagem.
    } else if (button.classList.contains("clear")) {
      clearInterval(timer)
      timerElement.innerHTML = "00:00:00"
      seconds = 0
      timerElement.classList.remove("paused")
      timerElement.classList.add("cleared")
      setTimeout(() => {
        timerElement.classList.remove("cleared")
      }, 300)
    } else {
      return
    }
  })
})

// Funções
// Função que pega o número em segundos e o transforma em milisegundos e retorna o valor
function getSeconds(seconds) {
  const newDate = new Date(seconds * 1000)
  return newDate.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  })
}

// Função que inicia a contagem do timer passando o retorno da função getSeconds() passando seconds como parâmetro
// A variável seconds começa com zero
// A variável timer adiciona um setInterval incrementando seconds a cada segundo e imprimindo no timer do HTML
// E vai atualizando a cada segundo (1000 milisegundos)
function startTimer() {
  timer = setInterval(() => {
    seconds++
    timerElement.innerHTML = getSeconds(seconds)
  }, 1000)
}
