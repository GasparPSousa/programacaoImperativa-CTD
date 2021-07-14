/*
    - map()
Quando usar o map?

Você quer obter um NOVO array com a MESMA QUANTIDADE de itens do Array Original, 
mas com CADA ITEM TRANSFORMADO.

O map SEMPRE retorna um valor, DIFERENTEMENTE DO ForEach

O map pode receber três parâmetros:
item, index, array, mas só o item é obrigatório.

*/

const numbers = [1, 2, 3]

const squareNumbers = numbers.map(item => item ** 2)

console.log(squareNumbers)

const tvShows = [
    {name: 'Breaking Bad', releaseYear: 2008},
    {name: 'Mr. Robot', releaseYear: 2015},
    {name: 'True Detective', releaseYear: 2014},
    {name: 'Hannibal', releaseYear: 2013},
    {name: 'The Handmais\'s Tale', releaseYear: 2017},
    {name: 'House M.D.', releaseYear: 2004},
    {name: 'Watchmen', releaseYear: 2019},
]


// Recebendo um objeto e usando a notação objeto.propriedade
const showNames = tvShows.map(tvShow => tvShow.name)
console.log(showNames)

const showReleaseYear = tvShows.map(releaseYear => releaseYear.releaseYear)
console.log(showReleaseYear)


// Usando o Destructuring no objeto recebido no parâmetro da função 
const showNames2 = tvShows.map(({ name }) => name)
console.table(showNames2)

const showReleaseYear2 = tvShows.map(({ releaseYear }) => releaseYear)
console.table(showReleaseYear2)
