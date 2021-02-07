"use stritc"


let teclado = document.querySelector('#teclado')



teclado.addEventListener("keypress", (event)=>{ 
  if(event.key === "Enter"){    
    teclado.value= eval(teclado.value)
  }
})