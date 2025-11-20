// const marco = 60 * 60 * 3 * 1000
// const newDay = 60 * 60 * 24 * 1000
// const data = new Date(0 + marco + newDay + newDay)
// console.log(data.toString())

// const data = new Date(1993, 3, 29, 20, 54, 33) // ano, mês, dia, hora, minuto, segundo, milésimo de segundo
// const data2 = new Date("1993-04-29 20:00:33") // por string - ano, mês, dia, hora, minuto, segundo, milésimo de segundo

// console.log(data2.toString())
// console.log("Dia", data.getDate())
// console.log("Mês", data.getMonth())
// console.log("Ano", data.getFullYear())
// console.log("Hora", data.getHours())
// console.log("Minuto", data.getMinutes())
// console.log("Segundo", data.getSeconds())
// console.log("MS", data.getMilliseconds())
// console.log("Dia da seamna", data.getDay())

function formatDate(data) {
  const dia = formatNum(data.getDate())
  const mes = formatNum(data.getMonth())
  const ano = formatNum(data.getFullYear())
  const hora = formatNum(data.getHours())
  const minuto = formatNum(data.getMinutes())

  return `${dia}/${mes + 1}/${ano} ${hora}:${minuto}`
}

function formatNum(num) {
  return num >= 10 ? num : `0${num}`
}

const data = new Date(2019, 10, 1, 18, 7, 5)
const novaData = formatDate(data)

console.log(novaData)
