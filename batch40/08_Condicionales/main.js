// //ESTRUCTURA CONDICIONALES

// //if(condicion){
//    // accion que se ejecuta cuando se cumple la condicion
// //}

// //else{
//   //  accion que se ejecuta si no se cumple la accion
// //}

// //OPERADORES <  >  <=  >=  ==(compara valores)  ===(compara valores y hace diferencia entre valores y texto) !== (si son valores diferentes)


// let num1 = 7

// if(num1 > 9){
//     console.log("verdadero")

// } else{
//     console.log("falso")
// }


// let residuo = num1 % 2
//  if(residuo === 0) {
//      console.log("el número es:" + "es par")
//  }else{
//     console.log ("el número es:" + "es impar")
//  }


// //CHALLENGE LICENCIA CONDUCIR

// let edad = Number (prompt("Ingresa tu edad!"))

// if (edad >= 18 && edad <=80){
//     console.log("puedes conducir")
// } else if (edad < 16 || edad > 80 ){
//     console.log ("No puedes conducir")
// }else if (edad === 16 || edad === 17){
//     console.log("Puedes sacar tu permiso")
// }else{
//     console.error("Datos incorrectos")
// }

//toUpperCase
//toLowerCase


//PIEDRA,PAPEL,TIJERA



let jugador1 = prompt("piedra, papel o tijera").toLowerCase()
 console.log("Jugador1" + jugador1)
let jugador2 = prompt("piedra, papel o tijera").toLowerCase()
 console.log("Jugador2" + jugador2)

 if(jugador1 === "piedra" && jugador2 === "papel"){
 console.log ("gana jugador 2")
 } else if (jugador1 === "piedra" && jugador2 === "tijeras"){
  console.log ("gana jugador1")
  } else if (jugador1 === "piedra" && jugador2 === "piedra"){
  console.log ("empate")
}else if (jugador1 === "papel" && jugador2 === "piedra"){
    console.log("gana jugador1")
}else if (jugador1 === "papel" && jugador2 === "papel"){
    console.log("empate")
}else if (jugador1 === "papel" && jugador2 === "tijeras"){
    console.log("gana jugador2")
}else if(jugador1 === "tijeras" && jugador2 === "piedra"){
    console.log("gana jugador2")
}else if(jugador1 === "tijeras" && jugador2 === "papel"){
    console.log("gana jugador1")
}else if(jugador1 === "tijeras" && jugador2 === "tijeras"){
    console.log("empate")
}else{
    console.error("Elige solo piedra, papel o tijeras")
}


