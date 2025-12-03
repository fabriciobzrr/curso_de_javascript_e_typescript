function createPerson(nome, sobrenome, idade, formacao) {
  const pessoa = {
    nome,
    sobrenome,
    idade,
    formacao,
    // GETTER - obtem o valor
    get fala() {
      console.log(
        `Olá, meu nome é ${this.nome} ${this.sobrenome}, eu tenho ${this.idade} anos e sou formado em ${this.formacao}.`
      )
    },
  }
  return pessoa
}

const onePerson = createPerson("Fabricio", "Bezerra", "32", "Administração")

console.log(
  onePerson.nome,
  onePerson.sobrenome,
  onePerson.idade,
  onePerson.formacao
)
onePerson.fala
