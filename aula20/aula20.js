"use strict"

//uma funçaõ geradora tem o seu retorno adiado até o momento que agente o precisa desse retorno

function* cores(){
  yield "vermelho"
  yield "azul"
  yield "verde"
}

const iteradorCores = cores()

console.log(iteradorCores.next().value)
console.log(iteradorCores.next().value)
console.log(iteradorCores.next().value)

function* contador(){
  let i = 0
  while(true){
    yield i++
  }
}

const iteradorContador = contador()

console.log(iteradorContador.next().value)
console.log(iteradorContador.next().value)

function* perguntas(){
  const nome = yield "Qual o seu nome? "
  const esporte = yield "Qual o seu esporte favorito? "
  return "O seu nome é " +  nome + " O seu esporte favorito é " + esporte
}

const iteradorPerguntas = perguntas()
console.log(iteradorPerguntas.next().value)
console.log(iteradorPerguntas.next("Vitor").value)
console.log(iteradorPerguntas.next("Futebol").value)