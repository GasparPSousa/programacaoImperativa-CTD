// Map()

// Este método recebe uma função como parâmetro(callback)
// Faz um loop no array e retorna um novo array modificado
// As modificações serão aquelas que programamos em nossa função callback.


let numeros = [2, 4, 6]
let dobro = numeros.map(function(num){
    return num * 2
})
console.log(dobro)




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let triple = numbers.map(number => number * 3)

console.log(triple)