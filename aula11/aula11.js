"use strict"
// break interrompe todo o laço
// continue interrompe a atual interação

let valor = 0
let maximo = 100

while(valor< maximo){
  console.log("vitao - " + valor)
  if(valor > 30){
    break
  }
  valor ++
}
let pares = 0
for(valor = 0; valor< maximo; valor ++){
  if(valor%2 != 0){
    continue 
  }
  pares ++
}

console.log(pares)
console.log("fim do programa")
