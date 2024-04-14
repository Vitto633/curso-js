"use strict"

//é um tipo de função anonima
// se for uma função que so vai entrar com um parametro não precisa do parenteses
// se não for utilizado o return não a obrigatoriedade de usar chaves

const soma = (valor1 = 0, valor2=0) =>{return valor1 + valor2}

const nome = valor=>{
  console.log(valor)
}

const adicionar = valor => valor + 10

console.log(adicionar(10))


console.log(soma(10))
nome("vitor")