const meuNome = function() {
  return `Fabricio`
}

function greeting() {
  return `Tenha um bom dia!`
}

function saudacaoNome(funcao, greeting) {
  return `Olá, ${funcao()}!
${greeting()}`
}

console.log(saudacaoNome(meuNome, greeting))