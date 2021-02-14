"use stritc"

let teclado = document.querySelector('#teclado')

teclado.addEventListener("keypress", (event) => {
  //console.log(event)  ver teclado 
  if (event.key === "Enter") {
    teclado.value = eval(teclado.value)
  }
})
const testar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '-', '+', '.', 'Enter']
function validar(event) {
  if (testar.includes(event.key))//se for nro mostra 
  { } else
    if (event.key == ",") {// troca , por .
      event.preventDefault()
      teclado.value += "."
    }
    else {
      event.preventDefault()//impedi de mostrar letra, so aceiat numero
      //console.log(event.charCode)  ver teclado

    }
}



