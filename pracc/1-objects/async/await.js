function randNum(min = 0, max = 3) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function waiting(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== "string") {
        reject("Caiu no erro")
      }
      resolve(message + ` - Passei`)
      return
    }, time)
  })
}

// waiting("Fase 1", randNum())
//   .then((value) => {
//     console.log(valor1)
//     return waiting("Fase 2", randNum()).then((value) => {
//       console.log(atribuicao2)
//       return waiting("Fase 3", randNum()).then((value) => {
//         console.log(definicao3)
//       })
//     })
//   })
//   .catch((err) => console.log("Deu BO: ", err))

async function runApp() {
  try {
    const fase1 = await waiting("Fase 1", randNum())
    console.log(fase1)

    const fase2 = await waiting("Fase 2", randNum())
    console.log(fase2)

    const fase3 = await waiting(3, randNum())
    console.log(fase3)

    console.log("Teminamos na:", fase3)
  } catch (err) {
    console.log("Erro: ", err)
  }
}

runApp()
