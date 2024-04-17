"use strict"

function* soma(){
  const valor1 = yield 
  const valor2  = yield
  soma = valor1 + valor2
  return "O valor é " + soma
}

const iteradorSoma = soma()
console.log(iteradorSoma.next())
console.log(iteradorSoma.next(20))
console.log(iteradorSoma.next(30))
console.log(iteradorSoma.next().value)