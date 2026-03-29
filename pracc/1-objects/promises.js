function callback(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, time)
  })
}

function randomNum(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

const buscarUsuarioNoBanco = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`[LOG] Iniciando busca do usuário ${id}...`)

    setTimeout(
      () => {
        const iduser = id

        if (iduser === id) {
          const usuario = { id: id, nome: "Fabricio", cargo: "Dev Backend" }
          resolve(usuario)
        } else {
          reject("Usuário não encontrado no banco.") // Promessa rejeitada
        }
      },
      randomNum(1, 3),
    )
  })
}

async function executarTarefa() {
  try {
    const resultado = await buscarUsuarioNoBanco(101)
    console.log("Sucesso:", resultado.nome)
  } catch (erro) {
    console.error("Erro:", erro)
  } finally {
    console.log("Operação finalizada (limpando recursos).")
  }
}

const result = await buscarUsuarioNoBanco(101)

const promises = ["Numero 1", result.nome, callback("Teste", 1500)]
Promise.all(promises)
  .then((valor) => {
    console.log(valor)
  })
  .catch((erro) => {
    console.log(erro)
  })
