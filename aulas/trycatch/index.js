const soma = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("a e b precisam ser números")
  }
  return a + b
}

try {
  console.log(soma(323, 701))
  console.log(soma("323", 701))
} catch (err) {
  console.log("Atenção: digite somente números válidos.")
} finally {
  console.log("Fim da execução")
}
