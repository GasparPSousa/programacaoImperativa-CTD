// Destructuring (Desestruturação)

// A desestruturação nos permite EXTRAIR DADOS de arrays e objetos literais 
// de uma maneira mais simples e fácil de implementar

// Não modifica o array ou objeto literal de origem

// Seu único objetivo é copiar os valores de forma mais prática e rápida.

// Extraindo valores da forma convencional

// De um array
let cores = ['Roxo', 'Azul', 'Amarelo']
let azul = cores[1]
console.log(azul)

// De um objeto
let carro = {marca:'Ford', ano: 1998, cor:'Preto'}
let marca = carro.marca
console.log(marca)

// Usando a Desestruturação

// Em um array - Deixando um elemento vazio
let [roxo, , amarelo] = cores
console.log(roxo)
console.log(amarelo)



// Em um objeto - modificando o nome a propriedade marca para fabricante
let {marca: fabricante, ano, cor} = carro;
console.log(fabricante)
console.log(ano)
console.log(cor)








