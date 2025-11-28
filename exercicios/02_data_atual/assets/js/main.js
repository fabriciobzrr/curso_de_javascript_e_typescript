const p = document.querySelector("#container h1")
const data = new Date()
const myData = {
  diaSemanaData: data.getDay(),
  diaData: data.getDate(),
  mesData: data.getMonth(),
  anoData: data.getFullYear(),
  horaData: data.getHours(),
  minutoData: data.getMinutes(),
  segundoData: data.getSeconds(),
}

function checkDiaSemana(numDia) {
  const nomeDia = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ]
  return nomeDia[numDia]
  // let diaSemana
  // switch (numDia) {
  //   case 0:
  //     diaSemana = `Domingo`
  //     break
  //   case 1:
  //     diaSemana = `Segunda-feira`
  //     break
  //   case 2:
  //     diaSemana = `Terça-feira`
  //     break
  //   case 3:
  //     diaSemana = `Quarta-feira`
  //     break
  //   case 4:
  //     diaSemana = `Quinta-feira`
  //     break
  //   case 5:
  //     diaSemana = `Sexta-feira`
  //     break
  //   case 6:
  //     diaSemana = `Sábado`
  //     break

  //   default:
  //     diaSemana = "Inválido"
  //     break
  // }
  // return diaSemana
}

function checkMes(numData) {
  const nomeMes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  return nomeMes[numData]
  // let mesData
  // switch (numData) {
  //   case 0:
  //     mesData = `Janeiro`
  //     break
  //   case 1:
  //     mesData = `Fevereiro`
  //     break
  //   case 2:
  //     mesData = `Março`
  //     break
  //   case 3:
  //     mesData = `Abril`
  //     break
  //   case 4:
  //     mesData = `Maio`
  //     break
  //   case 5:
  //     mesData = `Junho`
  //     break
  //   case 6:
  //     mesData = `Julho`
  //     break
  //   case 7:
  //     mesData = `Agosto`
  //     break
  //   case 8:
  //     mesData = `Setembro`
  //     break
  //   case 9:
  //     mesData = `Outubro`
  //     break
  //   case 10:
  //     mesData = `Novembro`
  //     break
  //   case 11:
  //     mesData = `Dezembro`
  //     break
  //   default:
  //     mesData = "Inválido"
  //     break
  // }
  // return mesData
}

function createData(data) {
  const nomeDiaSemana = checkDiaSemana(myData.diaSemanaData)
  const nomeMes = checkMes(myData.mesData)

  return `${nomeDiaSemana}, ${myData.diaData} de ${nomeMes} de ${
    myData.anoData
  } às ${adjustTime(myData.horaData)}:${adjustTime(
    myData.minutoData
  )}:${adjustTime(myData.segundoData)}`
}

function adjustTime(num) {
  return num > 9 ? `${num}` : `0${num}`
}

p.innerHTML = createData(data)

// const p = document.querySelector("#container h1")
// const data = new Date()
// p.innerHTML = data.toLocaleString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short",
// })
