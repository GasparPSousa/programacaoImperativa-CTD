/** forEach()
 * O Objetivo deste método é ITERAR em um array.
 * 
 * Ele recebe uma CALLBACK como parâmetro e, ao contrário dos métodos anteriores,
 * NÃO retorna nada.
 */

var paises = ['Brasil', 'Cuba', 'Peru']

paises.forEach(function(pais) {
    console.log(pais)
})


// forEach + Arrow Functions

let countries = ['Brasil', 'Cuba', 'Peru']

countries.forEach(pais => console.log(pais))
