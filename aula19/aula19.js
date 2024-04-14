"use strict"
//funções aninhadas

let valor
const soma = (...valores) =>{
  const somar = val =>{
    let resultado = 0
    for(valor of valores){
      resultado += valor
    }
    return resultado
  }
  return somar(valores)
}
console.log(soma(10, 5, 15))

const divisao = (...valores) =>{
  const dividir = val =>{
    for(valor in valores){
      console.log("Indice", valor)
    }
    for(valor of valores){
      console.log("Valor", valor, "divido por dois igual a",valor/2)
    }
  }
  dividir(valores)
}

divisao(10, 5)