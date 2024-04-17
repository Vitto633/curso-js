"use strict"

//o metodo map percorre as coleções
//que recebe por parametro os elementos e os indices 

const cursos = ["html", "css", "javaScript","php", "react"]
cursos.map((elemento, indice) =>{
  console.log("\nCurso: " + elemento + "\nPosição do curso na coleção " + indice)
})

let funcaoMap = cursos.map((elemento, indice) =>{
  return elemento
})

console.log(funcaoMap)

let mudaMap = cursos.map((elemento, indice) =>{
  elemento = "ruby sola"
  return elemento
})

console.log(mudaMap)

let elementos = document.getElementsByTagName("div")
elementos = [...elementos]

let mapElementos = elementos.map((elemento, indice)=>{
  console.log(elemento)
})
console.log(elementos)

let mudaElementos = elementos.map((elemento, indice) => {
  return elemento.innerHTML = "oi"
})


//estudar essa parte dnv =>

const elementosDois = document.getElementsByTagName("div")
const valores = Array.prototype.map.call(elementosDois, ({innerHTML}) =>innerHTML)

console.log(valores)



const converterInt = (elemento)=>{
  return parseInt(elemento)
}

let numeros = ['1', '2', '3', '4', '5']

console.log(numeros)
numeros = numeros.map(converterInt)
console.log(numeros)

const dobrarValores = (valor) =>{
  return valor * 2
}

console.log(numeros.map(dobrarValores))