//Objetos - Object

var persona = {
    nombre : "Ricardoñ",
    edad : "22",
    telefono : "5512316846354",
    direcion : "CDMX",
    musica : ["rock", "regeton", "salsa", "k-pop"],
    peliculas : {
        accion : ["MI", "Ronnig", "DdM"],
        drama : ["titanic", "Match point"],
        romcom : ["la propuesta", "Yo antes de ti", "one day", "cassanovias"],
        terror : {
            gore : "Destino final",
            slasher : "halloween",
            vampiros : ["crepusculo" , "VH"]
        }
    }
}


console.log(persona.nombre)
console.log(persona.musica[3])
console.log(persona.peliculas.accion[2])
console.log(persona.peliculas.terror.vampiros[0])
