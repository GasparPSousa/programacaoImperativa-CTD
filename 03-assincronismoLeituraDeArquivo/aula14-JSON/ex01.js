// Data 07/07/2021
// Aula 14 - JSON
// ex01.js

let dadosJson = '{"nome": "Gaspar", "sobrenome": "Sousa", "Sexo":"Masculino"}';
console.log(dadosJson)

// JSON é um objeto nativo

// Desserialização ou parsing (Conversão de arquivo JSON para arquivo JavaScrip)
// -- Início --
console.log("Convertendo JSON para JS")
let dadosConvertidosJS = JSON.parse(dadosJson)
console.log(dadosConvertidosJS)
console.log(dadosConvertidosJS.nome)
console.log(dadosConvertidosJS.sobrenome)
console.log(dadosConvertidosJS.nome.toUpperCase())
// -- Termino --

// Serialização ou Stringify (Conversão de arquivo JavaScript para arquivo JSON)
// -- Início --
console.log("Convertendo JS para JSON")
let novoDadoJson = JSON.stringify(dadosConvertidosJS)
console.log(novoDadoJson)
// -- Termino --


let objetoLiteral = {
    materia:'Programação Imperativa',
    professor: 'William'
}
console.log(objetoLiteral)
objetoLiteral.professor = objetoLiteral.professor.toUpperCase()
console.log(objetoLiteral)


// Transformar em JSON - stringifly
let objetoConvertidoJSON = JSON.stringify(objetoLiteral)
console.log(objetoConvertidoJSON)

