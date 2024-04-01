"use strict"

let validaMaca = function(quantidade){
  let maca = 0.30
  let total
  if(quantidade > 12){
    maca = 0.25
  }
  total = maca *quantidade
  return total
}

module.exports = validaMaca