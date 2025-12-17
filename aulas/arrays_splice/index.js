const nomes = ["Fabricio", "Fred", "Faber", "Billy"]
const others = [true, false]

nomes.splice(nomes.length, 0, "Jota")
const res = nomes.concat(others, 44, [22, 33, 44])
const res2 = [...nomes, ...others, "Manjuba", ...[1, 2]]
console.log(res2)
