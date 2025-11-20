const myDate = new Date()
const dateWeek = myDate.getDay()
let dateWeekTxt

switch (dateWeek) {
  case 0:
    dateWeekTxt = `Domingo`
    break
  case 1:
    dateWeekTxt = `Segunda-feira`
    break
  case 2:
    dateWeekTxt = `Terça-feira`
    break
  case 3:
    dateWeekTxt = `Quarta-feira`
    break
  case 4:
    dateWeekTxt = `Quinta-feira`
    break
  case 5:
    dateWeekTxt = `Sexta-feira`
    break
  case 6:
    dateWeekTxt = `Sábado`
    break
  default:
    dateWeekTxt = `Inválido`
    break
}

console.log(myDate.getDate(), dateWeekTxt)
