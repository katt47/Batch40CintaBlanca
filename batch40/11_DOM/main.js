let titulo = document.getElementById('titulo') 
let parrafo = document.getElementById('parrafo') 
let button = document.getElementById('boton') 
let texto = document.getElementById('texto')
let respuesta = document.getElementById('respuesta')


// //FORMA ANTERIOR DE HACERLO
// let boton = document.getElementById('boton')


//FORMA ACTUAL Y ESTANDAR DE HACERLO

const cambio = () => {
titulo.innerHTML = 'Titulo Cambiado'
parrafo.innerHTML = 'Parrafo cambiado'
respuesta.innerHTML = texto.value
}

boton.addEventListener('click', cambio)