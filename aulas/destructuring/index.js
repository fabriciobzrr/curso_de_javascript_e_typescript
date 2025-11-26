const nomes = ["Faber", "Fred", "Bicio", "Fabra1", "Fabricio"]
const [nomeUm, nomeDois, ...resto] = nomes

console.log(nomeDois, nomeUm, resto)
console.log(resto)

const person = {
  nome: "Fabricio",
  idade: 32,
  sobrenome: "Bezerra",
  endereco: {
    rua: "Castelo Branco",
    numero: 86,
  },
}

const {
  nome,
  idade,
  sobrenome,
  endereco: { rua, numero },
} = person
console.log(nome, idade, sobrenome, rua, numero)
