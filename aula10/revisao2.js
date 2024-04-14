"use strict"

let variavel = [10, 2 , 5, 10]
let valor


//for que mostra o valor de cada indice
for(valor in variavel){
  console.log("O valor do indice ", valor)
}

console.log(" ")

for(valor of variavel){
  console.log("O valor da posicao ", valor)  
}

console.log(" ")

for(valor =0; valor < variavel.length; valor ++){
  console.log("O valor do indice ", valor, " eh ", variavel[valor])
}