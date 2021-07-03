/* Reduce()

Este método pecorre o array e retorna um único valor.

Ele recebe uma callback para ser executada em cada elemento do array.

Este, por sua vez, recebe dois parâmetros: Um acumulador e o elemento atual que está percorrendo.


 */

let numeros = [5, 7, 16]

let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero
});

console.log(soma)

// Reduce com Arrow Function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

let sum = numbers.reduce((acc, number) => acc + number)

console.log(sum)
    