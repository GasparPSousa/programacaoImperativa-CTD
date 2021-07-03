/** MicroDesafio01
 * 
 * Crie um array de números pares, e utilizando a função .map() nesse array, 
 * crie um novo array com apenas números ímpares.
 * 
 */


let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18 ,20]

let numerosImpares = numerosPares.map(item => item + 1)
console.log(numerosImpares)