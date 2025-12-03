function funcaoUm() {
  const nome = "Fabricio"
  return function () {
    return `${nome} Faber`
  }
}

const funcao = funcaoUm()
console.dir(funcao)
