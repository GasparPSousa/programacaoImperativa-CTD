/* Reduce()

Este método pecorre o array e retorna UM ÚNICO valor.

Ele recebe uma CALLBACK para ser executada em CADA ELEMENTO do array.

ESTA, por sua vez, recebe dois parâmetros: Um acumulador e o elemento atual que está percorrendo.


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
    