function randomTime(min = 1000, max = 3000) {
  const num = Math.floor(Math.random() * (max - min) + min)
  return num
}

function f1(func) {
  setTimeout(function () {
    console.log("Test 1")
    if (func) func()
  }, randomTime())
}

function f2(func) {
  setTimeout(function () {
    console.log("Test 2")
    if (func) func()
  }, randomTime())
}

function f3(func) {
  setTimeout(function () {
    console.log("Test 3")
    if (func) func()
  }, randomTime())
}

// f1(() => {
//   f2(() => {
//     f3()
//   })
// })

f1(f1Func)

function f1Func() {
  f2(f2Func)
}

function f2Func() {
  f3(f3Func)
}

function f3Func() {
  console.log("Último...")
}

console.log("Primeiro...")
