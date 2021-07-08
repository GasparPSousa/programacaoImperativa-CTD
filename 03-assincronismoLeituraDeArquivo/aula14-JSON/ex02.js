// Data 07/07/2021
// Aula 14 - JSON
// ex02.js

let frutas = '{"fruta" : "banana", "preco" : 5.00, "tipo" : ["prata", "maça", "nanica", "da terra", "ouro"], "origem" : "Brasil" }';

console.log(frutas)


let frutasConvertidasJS = JSON.parse(frutas)
console.log(frutasConvertidasJS)
console.log(frutasConvertidasJS.origem)

// Reconvereter para JS
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS)
console.log(frutasConvertidasJSON)