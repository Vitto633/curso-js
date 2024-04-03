"use strict"

let pesoIdeal = function(sexo, altura){
  if(sexo == 1){
    console.log(72 * altura -58)  
  }else if(sexo == 2){
    console.log( 62.1 * altura - 44.7)
  }else{
    console.log("Não binarie")
  }
}

module.exports = pesoIdeal