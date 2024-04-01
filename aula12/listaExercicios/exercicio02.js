"use strict"

let verificaVoto = function(anoNascimento){
  let anoAtual = 2024
  let idade = anoAtual - anoNascimento

  if(idade < 16){
    console.log("Nao pode votar.")
  }else if(idade <18){
    console.log("Voto opcional.")
  }else if(idade<= 70){
    console.log("Voto obrigatorio.")
  }else{
    console.log("Voto opcional.")
  }
}

module.exports = verificaVoto 