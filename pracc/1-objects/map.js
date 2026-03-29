const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
]
const novas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novas.set(id, { ...pessoa })
}

console.log(novas)
