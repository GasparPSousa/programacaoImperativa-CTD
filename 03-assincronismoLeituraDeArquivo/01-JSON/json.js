
let dadosJson = '{ "cidade":"São Paulo", "bairro":"Morumbi" }';

console.log(dadosJson)

let dadosConvertidos1 = JSON.parse(dadosJson)
console.log(dadosConvertidos1)


let objetoLiteral = {
    nome: 'Carla',
    pais: 'Brasil'
}

console.log(objetoLiteral)

let dadosConvertidos2 = JSON.stringify(objetoLiteral)

console.log(dadosConvertidos2)





