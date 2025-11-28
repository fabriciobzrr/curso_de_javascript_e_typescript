function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Somente objetos do tipo Date são válidos!")
  }
  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

const newData = new Date("01-01-2000 17:22:34")
const newHora = retornaHora(newData)
console.log(newData.getHours())
try {
  console.log(newHora)
} catch (err) {
  console.log("Erro:", err.message)
} finally {
}
