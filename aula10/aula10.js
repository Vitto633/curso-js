// for in && for of
"use strict"

const objs = document.getElementsByTagName("div")
let array = [10, 20, 30 , 40, 50]
let n;
// for(let i = 0; i < array.length; i++ ){
//   console.log(array[i])
// }


for(n of objs){
  console.log(n.innerHTML = "vitor")
}
for(n in objs){
  console.log(objs[n].innerHTML)

}