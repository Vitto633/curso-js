"use strict"

const multiplicacao = new Function("valor1 = 0", "valor2 = 0", "valor3 = 0", "return (valor1 + valor2 +valor3)*3")

console.log(multiplicacao(10, 5, 15))
