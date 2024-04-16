"use strict"

//funçoes anonimas

// uma funçao anonima não é guardada na memoria para ser chamada mais tarde ela não precisa de nome por isso tem que ser atribuida em uma variavel 

const funcaoAnonima = function (...valores){
  let resultado = 0
  let numero
  for(numero of valores){
    resultado += numero
  }
  return resultado
}

console.log(funcaoAnonima(15, 10, 30)) 

// função com metodo construtor
// a função so pode ter isso se ela for simples tipo retornar a soma de dois numeros 

// algumas regras
// a palavra 'function' deve começar com 'f' maiusculo
// a função deve receber os valores por parametro e retornar o resultado tambem por parametro
// os parametros devem estar entre aspas


const funcaoAnonimaDois = new Function("valor1 = 0"," valor2 = 0", "return valor1 + valor2")
console.log(funcaoAnonimaDois(10, 3))
