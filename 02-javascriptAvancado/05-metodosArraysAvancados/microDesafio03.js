/** MicroDesafio03
 * 
 * Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

    Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

 * 
 * 
 * 
 */

let numbers = [1, 5, 9, 3, 7]

let numbersFormatted = numbers.reduce((acc, number) => `${acc}-${number}`)

console.log(`"${numbersFormatted}"`)