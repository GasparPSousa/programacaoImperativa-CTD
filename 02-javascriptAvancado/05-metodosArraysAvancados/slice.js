/** slice()
 * Este método retorna uma cópia do array. Para isso é necessário determinar
dois parâmetros, índice inicial e final (opcional).

slice extrai até, não incluindo, fim.

Caso o índice inicial seja negativo, é extraído os elementos se iniciando no final
do array.

Caso o índice inicial seja omitido o padrão é 0.

Se for um índice maior que o tamanho do array, retornará um array vazio.

Caso o índice final seja negativo, ele conta para o final, array.slice(3, -1) extrai
do quarto elemento até o penúltimo. 

Se for maior que o tamanho do array ou omitido, extrai para o final do array.

 */



let numeros = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let subArray = numeros.slice(3, -3)

console.log(subArray)

