"use strict"

let array1 = [10, 20, 30]
let array2 = [11, 22, 33, 66, 44]
let array3  = [array1, array2]

console.log("array1 = "  + array1)
console.log("array2 = " + array2)
console.log("array3 = " + array3)
console.log("tipo: " + typeof(array3))

const jogador1 = {nome:"bruno", energia: 100, vidas:3, magia:150}
const jogador2 = {nome:"vitor", energia: 100, vidas:5, sobrenome:"daluzao"}

const jogador3 = {...jogador1, ...jogador2}
console.log(jogador3)

const soma = (valor1, valor2, valor3) =>{
  return valor1 + valor2 + valor3
}

let valores = [
  1,
  5,
  4
]
console.log(soma(...valores))

const obj = document.getElementsByTagName('div')
const obj2 = [...document.getElementsByTagName('div')]


obj2.forEach(element =>{
  console.log(element)
})
console.log(obj)
console.log(obj2)