// Aula 12 - 30/06/2021
/* 

o map() -> método que cria um nova matriz com os resultados
da chamada de uma função, para cada elemento/item da matriz. 


*/

let letrasMinusculas = ['a', 'b', 'c', 'd']

console.log(letrasMinusculas)

// Map usando uma função normal
let letrasMaiusculas = letrasMinusculas.map(
    function maiuscula(elemento) {
        return elemento.toUpperCase()
    }    
)

console.log(letrasMaiusculas)

// Map usando uma arrow function
// let letrasMaiusculasArrow = letrasMinusculas.map(maiuscula = elemento => elemento.toUpperCase())

// Caso não precise reusar a função maiuscula, não precisa nomear)
let letrasMaiusculasArrow = letrasMinusculas.map(elemento => elemento.toUpperCase())

console.log(letrasMaiusculasArrow)

