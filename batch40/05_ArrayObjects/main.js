// alert("DUDA")

//ARRAY

var colores = ["verde", "azul", "morado", "gris"]

console.log(colores)
console.log(colores[2])

colores [4] = "naranja"
console.log (colores)


//PUSH suma un elemento al final

colores.push("rosa")

console.log(colores)


//POP borra el ultimo elemento

colores.pop()
console.log(colores)

//SPLICE borra elementos especificos

//a partir de la posicion q se quiere borrar y cada cuantos espacios y por que valor lo vas a reemplazar, se pueden usar solo dos valores
colores.splice(2,2,1)  
colores.splice(2,0,1) //usando 0 el valor se agrega

console.log(colores)