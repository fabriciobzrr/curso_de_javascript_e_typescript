function randonTimeMs(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function waitMessage(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") reject("Valores obtidos inválidos.")
    setTimeout(() => {
      resolve(message)
    }, time)
  })
}

// waitMessage("Testando conexão com a Base de Dados...", randonTimeMs(1, 3))
//   .then((msg) => {
//     console.log(msg)
//     return waitMessage(
//       "Conexão estabelecida. Tratando dados...",
//       randonTimeMs(1, 3)
//     )
//   })
//   .then((msg) => {
//     console.log(msg)
//     return waitMessage(32, randonTimeMs(1, 3))
//   })
//   .then((msg) => {
//     console.log(msg)
//   })
//   .catch((err) => {
//     console.log("ERRO:", err)
//   })

// console.log("Isso será exibido antes de qualquer promisse ser resolvida.")

const promise1 = [
  waitMessage("Teste 1", 1000),
  "Fred",
  waitMessage("Teste 2", 2000),
]

Promise.all(promise1)
  .then((valor) => {
    console.log(valor)
  })
  .catch((err) => {
    console.log(err, "Deu erro.")
  })
