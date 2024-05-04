const arr = ["a", "b", "c", "d", "e", "f"]
console.log(arr)

// adicionar elementos
// push - fim

let tamanhoElemento = arr.push("pudim")
console.error(arr)
console.log(tamanhoElemento)

// unshift - inicio
tamanhoElemento = arr.unshift("bolo")
console.error(arr)
console.log(tamanhoElemento)

// Remove elemento
// pop - fim
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift - inicio
ultimoElemento = arr.shift()
console.error(arr)
console.log(ultimoElemento)

// pesquisar por um elemento
// includes
let incli = arr.includes("a")
console.error(incli)

// index0f
const indice = arr.indexOf("a")
console.error(indice)

// Cortar e Concatenar
// Slide
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-3)
console.log(hobbits)
console.log(outros)

// caoncat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substição dos Elemento 
// splice 