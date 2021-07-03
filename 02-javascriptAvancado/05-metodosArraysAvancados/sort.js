/** sort()
 *
Este método nos ajuda a ORDENAR os elementos de um array.
Ele recebe um CALLBACK como um parâmetro (opcional) que especifica o modo de
classificação, se for omitido, o array é ordenado com o valor da string (Unicode),
converte cada elemento em uma string.

A callback recebe dois parâmetros, ambos elementos que serão comparados.
 * 
 */

let marcas = ['sansung', 'xiaomi', 'apple']

console.log(marcas.sort())


let numeros = [10, 52, 3, 4, 6, 7]

let novosNumeros = numeros.sort(function(a, b) {
    return a - b;
})

console.log(novosNumeros)

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);