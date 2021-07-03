/** splice()
 * Este método nos ajuda a REMOVER ou ADICIONAR elementos de um array.
    Recebe TRÊS parâmetros:
    Inicio: O índice do primeiro elemento (onde começará a mudança).
    Quantidade: Opcional - Número de inteiros a eliminar (deve ser do tipo inteiro).
    Itens: Indica os elementos que serão ADICIONADOS ao array. Caso seja omitido, ele apenas REMOVE.
 * 
 */

let numeros = [3, 4, 5, 6, 7]

numeros.splice(0, 0, 2)
console.log(numeros)

numeros.splice(1, 3)
console.log(numeros)

numeros.splice(1, 1)
console.log(numeros)
    