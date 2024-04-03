"use strict"
let ordemCrescente = function (valor){
  let vetorCrescente = valor.sort()
  for(let i = 0; i < 3 ; i++){
    console.log(valor[i])
  }
}

module.exports = ordemCrescente