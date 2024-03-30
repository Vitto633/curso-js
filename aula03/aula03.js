"use strict"

function teste(){
  let nome = "Vitor"
  if(true){
    console.log("dentro de teste " + nome)
  }  
  console.log("fora do if de teste" + nome)
}
teste()
console.log("fora de teste" + nome)