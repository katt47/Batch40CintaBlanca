//inputs
let preguntaNOMBRE = document.getElementById('preguntaNOMBRE')
let preguntaDIRECCION = document.getElementById('preguntaDIRECCION')
let preguntaTELEFONO = document.getElementById('preguntaTELEFONO')
let preguntaPINA = document.getElementById('preguntaPINA')

let boton = document.getElementById('boton')

//respuestas
let textoNOMBRE = document.getElementById('textoNOMBRE')
let textoDIRECCION = document.getElementById('textoDIRECCION')
let textoTELEFONO = document.getElementById('textoTELEFONO')
let textoPINA = document.getElementById('textoPINA')



// const ordenar = () => {

//     textoNOMBRE.innerHTML = preguntaNOMBRE.value
//     textoDIRECCION.innerHTML = preguntaDIRECCION.value
//     textoTELEFONO.innerHTML = preguntaTELEFONO.value
//     // textoPINA.innerHTML = preguntaPINA.value

//     card.classList.remove('none')

//     let pizzaReal = preguntaPINA.value
//     let compararPizza = pizzaReal.toLowerCase()


//     if(compararPizza === 'si'){
//         textoPINA.innerHTML = '😭'
//     }else if (compararPizza === 'no'){
//         textoPINA.innerHTML = '😍'
//     }else{
//         textoPINA.innerHTML = 'Datos incorrectos🤯'
//     }

// }


   //fotos
   let hawaiana = document.getElementById('hawaiana')
   let peperoni = document.getElementById('peperoni')
   let not = document.getElementById('not')

const ordenar = () => {

    textoNOMBRE.innerHTML = preguntaNOMBRE.value
    textoDIRECCION.innerHTML = preguntaDIRECCION.value
    textoTELEFONO.innerHTML = preguntaTELEFONO.value
 

    card.classList.remove('none')

    let pizzaReal = preguntaPINA.value
    let compararPizza = pizzaReal.toLowerCase()


    if(compararPizza === 'si'){
        peperoni.classList.add('none')
        hawaiana.classList.remove('none')
        not.classList.add('none')
    }else if (compararPizza === 'no'){
        peperoni.classList.remove('none')
        hawaiana.classList.add('none')
        not.classList.add('none')
    }  else {
        peperoni.classList.add('none') 
        hawaiana.classList.add('none') 
        not.classList.remove('none')
        
    }
    

}


boton.addEventListener('click', ordenar)