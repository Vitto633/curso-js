"use strict"

function canal(){
  let n1 = 10
  let n2 = 2
  let resultado = n1 * n2

  return resultado
}

function parOuImpar(valor){
  if(valor%2 == 0){
    return "é par"
  }
  else{
    return "é impar"
  }
}

console.log("O numero ", parOuImpar(4))