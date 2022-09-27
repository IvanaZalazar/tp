

const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numeros = ["0","1","2","3","4","5","6","7","8","9"]
const simbolos = ["@","%","&","*","+","-","/","°","|","?","¿","!","¡","#","$", "<",">"]

let nuevoArrayLetras = []
let nuevoArrayNumeros = []
let nuevoArraySimbolos= []



for (let i = 0; i<3; i++) {
    const indexLetras = Math.floor(Math.random() * letras.length)
nuevoArrayLetras.push(letras[indexLetras])
}
console.log(nuevoArrayLetras)

for (let i = 0; i<3; i++) {
    const indexNumeros = Math.floor(Math.random() * numeros.length)
nuevoArrayNumeros.push(numeros[indexNumeros])
}
console.log(nuevoArrayNumeros)

for (let i = 0; i<3; i++) {
const indexSimbolos = Math.floor(Math.random() * simbolos.length) 
nuevoArraySimbolos.push(simbolos[indexSimbolos])
}
console.log(nuevoArraySimbolos)

let contraseñaGenerada= nuevoArrayLetras.concat(nuevoArrayNumeros,nuevoArraySimbolos)

console.log(contraseñaGenerada.toString())



const $ = (selector) => document.querySelector(selector)

const $contrasenia = $("#campoContrasenia")
const $btnContrasenia = $("#btn-generar")

const agregarContrasenia = () => {
     $contrasenia.innerHTML += (contraseñaGenerada.toString())
}

$btnContrasenia.addEventListener("click", agregarContrasenia)

$contrasenia.addEventListener("click", () => {
    console.log("soy el evento")
    $contrasenia.innerHTML = contraseñaGenerada.toString()
})




//const generador= () => {
    

//}