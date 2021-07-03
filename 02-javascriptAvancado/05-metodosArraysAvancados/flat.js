/** flat()
 
   Este método é usado para DESEMBRULHAR sub-arrays dentro de arrays, ou seja,
   ele não modifica o array original.

   Recebe como parâmetro (opcional) um nível de profundidade que especifica o
quanto o array aninhado deve ser achatado, se for omitido, por padrão leva 1
como valor.

 */

let numeros = [1, 2, 3, [4], [[5, 6]], [[[7, 8, 9]]]]
console.log(numeros)

let novoArray = numeros.flat(1)
console.log(novoArray)

novoArray = numeros.flat(2)
console.log(novoArray)

novoArray = numeros.flat(3)
console.log(novoArray)