"use strict"

let verificaSenha = function(valor){
  let senha = 1234
  if(valor == senha){
    console.log("ACESSO PERMITIDO")
  }else{
    console.log("ACESSO NEGADO")
  }
}

module.exports = verificaSenha