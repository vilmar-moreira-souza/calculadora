"use stritc"

let teclado = document.querySelector('#teclado')

teclado.addEventListener("keypress", (event) => {
  //console.log(event)  ver teclado 
  if (event.key === "Enter") {
    teclado.value = eval(teclado.value)
  }
})


function validar(event) {
  if (event.key == "0" || event.key == "Enter" || event.key == "1" || event.key == "4" ||
    event.key == "2" || event.key == "5" ||
    event.key == "3" || event.key == "6" ||
    event.key == "7" || event.key == "9" ||
    event.key == "8" || event.key == "/" ||
    event.key == "*" || event.key == "-" ||
    event.key == "+" ||
    event.key == "."

  ) { } else
    if (event.key == ",") {// troca , por .
      event.preventDefault()
      teclado.value += "."
    }
    else {
      event.preventDefault()//impedi de mostrar letra, so aceiat numero
      //console.log(event.charCode)  ver teclado

    }
}



