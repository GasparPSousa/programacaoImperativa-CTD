// Aula 12 - 30/06/2021
/* 

o map() -> método que cria um nova matriz com os resultados
da chamada de uma função, para cada elemento/item da matriz. 


*/


let salarios  = [1050.75, 2000.78, 5000.98, 7500.89]
console.log(salarios)

let salariosAtualizados = salarios.map(reajuste);
// função normal fora da map
function reajuste(item) {
    return item * 1.4 // Atualizando em 40% de aumento no salário
}
console.log(salariosAtualizados)

// Usando Arrow Function
let reajusteArrow = item => item * 1.4;
console.log(salarios.map(reajusteArrow))






