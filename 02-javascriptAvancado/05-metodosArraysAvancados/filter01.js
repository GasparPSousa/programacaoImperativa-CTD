// Filter 

/**
 * Este método também recebe uma função como parâmetro.
 * Realiza o loop no array e FILTRA os elementos com base em uma CONDIÇÃO existente na callback.
 * 
 * Retorna um novo array que contém apenas os elementos que atendem a essa CONDIÇÃO.
 * Ou seja, poderá ter um número menor de elementos comparado ao array inicial.
 * 
 */

let idades = [22, 8, 17, 14, 30]

let maiores = idades.filter(function(idade) {
    return idade > 18
})

console.log(maiores)



let age = [15, 18, 19, 60, 8, 96, 12, 5, 61, 75, 36, 25, 31, 21, 28]

let major = age.filter(age => age >= 18)
let minor = age.filter(age => age < 18)

console.log(major)
console.log(minor)