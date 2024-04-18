"use strict"


/**
 * operador this
 * o set time out faz uma nova instancia do this então não funciona o this
 * porem se estiver usando uma arrow function dentro funciona por que a arrow function usa o contexto do pai
 */


function aluno(nome, nota){
  this.nome = nome
  this.nota = nota

  this.dadosAnonimo = function(){
    setTimeout(function(){
      console.log(nome)
      console.log(nota)
    },3000)
  }
  this.dadosArrow = ()=>{
    setTimeout(()=>{
      console.log(this.nome)
      console.log(this.nota)
    }, 3000)
  }
}


const aluno1 = new aluno("Vitor", 100)
aluno1.dadosArrow()

function pessoa(anoNascimento, sexo){
  this.anoNascimento = anoNascimento
  this.sexo = sexo
  this.idade = 2024 - anoNascimento
  this.mostraDados = function (){
    setTimeout(()=>{
      console.log("A sua idade é " + this.idade)
      console.log("O seu sexo é " + this.sexo)
    }, 2000)
  }
}

const primeiraPessoa = new pessoa(2007, "M")
primeiraPessoa.mostraDados()
