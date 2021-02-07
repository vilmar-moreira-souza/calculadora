"use stritc"
// adiçao: impedir letras


let teclado = document.querySelector('#teclado')

teclado.addEventListener("keyup", (event)=>{   
  if(event.key === "Enter"){    
    teclado.value= eval(teclado.value)
  }
})

