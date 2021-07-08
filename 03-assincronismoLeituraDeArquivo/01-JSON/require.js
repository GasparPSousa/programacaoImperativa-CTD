// Módulos Nativos
const path = require('path')

// console.log(path)
console.log(path.basename(__filename))
console.log(path.basename("./Users/gaspar/docs.js"))
console.log(path.basename("./json.js"))


// Meu módulo
// const meuModulo = require("./exports")

// console.log(meuModulo)

const alunos = require("./exports")
console.log(alunos)
console.log(alunos.aluno1) // Se exportar um objeto
console.log(alunos[0])     // Se exportar um array

