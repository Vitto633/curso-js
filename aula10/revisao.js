//for of && for in
"use strict"

let valores = [10, 20, 30]



// o for in conta como o indice do vetor então quando eu imprimir a variavel vai sair o valor de cada indice

let variavel
for(variavel in valores){
  console.log(variavel)
}

// como fica no for convencional

for(let i = 0; i < valores.length ; i++){
  console.log(i)  
}

// o for of armazena o real valor de cada espaço do array então vai sair o valor contido dentro de cada indice 

for(variavel of valores){
  console.log(variavel)
}

// como fica no for convencional 

for(let j = 0; j < valores.length; j++){
  console.log(valores[j])
}