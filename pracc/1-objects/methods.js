const product = {
  name: "Mouse",
  price: 200,
}
for (let i = 0; i < Object.entries(product).length; i++) {
  for (let j = 0; j < Object.entries(product)[i].length; j++) {
    console.log(Object.entries(product)[j])
  }
}
