/** includes()
 *
 * Verifica a existência de um elemento no array, retornando true caso exista, e
   false se não.

    Parâmetros que recebe:
    Elemento: valor que será procurado no array.
    Inicio: Índice na qual se iniciará a busca.
 * 
 */




let numeros = [3, 4, 5, 6, 7]

let existe = numeros.includes(4)
console.log(existe)

existe = numeros.includes(9)
console.log(existe)

existe = numeros.includes(3, 3)
console.log(existe)

existe = numeros.includes(4, 4)
console.log(existe)