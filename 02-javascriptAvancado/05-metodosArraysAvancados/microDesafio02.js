/** MicroDesafio02
 * 
 * Crie um array de nomes, que possua dois índices com o nome Maria. 
 * Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
 * 
 * 
 * 
 */


let nomes = ['Gaspar', 'Cristina', 'Maria', 'Carla', 'Érica', 'Evelyn', 'maria', 'Renato', 'Maria', 'Maria Cristina']

let achandoMaria = nomes.filter(nome => nome.toLocaleLowerCase() === 'Maria'.toLocaleLowerCase())
console.log(achandoMaria)