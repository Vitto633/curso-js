"use strict"

// a funcao anonima não é declarada com um nome e sim por uma variavel [uma caracteristica é que ela não fica salva na memoria como uma função padrao porem seu comportamento é o mesmo]

//os parametros rest funcionam com o operador spread e servem para tornar uma funcao expecifica em generica

let valor
let soma = 0
let funcaoSoma= function(...valores){
  for(valor of valores){
    soma = soma + valor
  }
  return soma
}
let resultado

resultado = funcaoSoma(10,15)
console.log(resultado)