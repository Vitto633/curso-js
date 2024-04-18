"use strict"

let valores = [10, 4, 5, 3, 6]

const dividePorDois = (valor)=>{
        return valor/2 
}

console.log(valores.map(dividePorDois))


const arrayString = ["vitor", "paulo", "jacob", "daniel"]

arrayString.map((elemento, indice)=>{
        console.log("elemento do vetor " + elemento + " - posicao " + indice) 
})





