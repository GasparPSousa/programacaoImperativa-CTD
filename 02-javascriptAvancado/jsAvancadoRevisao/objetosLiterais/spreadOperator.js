// Spread Operator(Operador de Propagação) 

// Permite EXPANDIR cada um dos dados de um elemento iterável dentro de outro elemento.

// Pode ser usado em QUALQUER elemento ITERÁVEL.
// Isso ajuda a copiar e mover dados de um lugar para o outro de forma eficiente.

// (...) é escrito com 3 pontos seguidos, precedendo o nome da variável.
// A variável pode conter um array, uma string, um objeto.

// Spread em Arrays
console.log('Spread Operator em Arrays')
let cores = ['Amarelo', 'Vermelho', 'Azul']
let outrasCores = ['Rosa', 'Verde', 'Preto']

let todasAsCores = [...outrasCores, ...cores]
console.log(cores)
console.log(outrasCores)
console.log(todasAsCores)


// Spread em Objetos
console.log('Spread Operator em Objetos')
let carro = {
    marca: 'Ferrari',
    km: 0,
    ano: 2019
}

let corredorUm = {
    nome: 'Vettel',
    idade: 32,
    ...carro
}

let corredorDois = {
    nome: 'Leclerc',
    idade: 21,
    ...carro
    
}

console.log(carro)
console.log(corredorUm)
console.log(corredorDois)

// Spread em Funções
console.log('Spread Operator em Funções')
let notas = [9.3, 8.5, 3.2, 7, 10]
min = Math.min(...notas)
max = Math.max(...notas)

console.log(min)
console.log(max)




