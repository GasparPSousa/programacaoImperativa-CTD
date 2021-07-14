/* 
    reduce()

    Quando usar o reduce?

    Você quer reduzir o array à algum tipo de dado.

    Ao contrário dos métodos map ou filter, o reduce tem poder e versatilidade 
    para gerar um output que pode não ser um array. 
    Recebe 4 parâmetros:
    acumulador, item, index, array, mas só os dois primeiros são obrigatórios.

    Na 1º vez que a função for executada, accumulator = 0...Esse 0 é um valor inicial.
    


*/

// 1º Exemplo
const numbers = [1, 2, 3]

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0) 

console.log(sum)


// 2º Exemplo
const cart = [
    {name: 'Dark Souls III', price: 95.03},
    {name: 'Shadow of the Tomb Raider', price: 101.13},
    {name: 'Sekiro: Shadows Die Twice', price: 179.99},
    {name: 'Resident Evil 2', price: 119.90},
    {name: 'Deth Stranding', price: 149.99},
]

/* 
Item Desejado

- nome 1
- nome 2
3 nome 3

*/

const productList = cart.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '')

console.log(productList)


    // 3º Exemplo
    const people = [
        {id: 5,  name: 'Angélica',    age:18, federativeUnit: 'Pernambuco'},
        {id: 81, name: 'Thales',      age:19, federativeUnit: 'São Paulo'},
        {id: 47, name: 'Ana Carolina',age:18, federativeUnit: 'Alagoas'},
        {id: 87, name: 'Felipe',      age:18, federativeUnit: 'Minas Gerais'},
        {id: 9,  name: 'Gabriel',     age:20, federativeUnit: 'São Paulo'},
        {id: 73, name: 'Aline',       age:19, federativeUnit: 'Brasília'},
    ]

    /* 
    
    Item Desejado
    
    { 18:3, 19:2, 20:1}
    
    */

    const agesFrequency = people.reduce((accumulator, { age }) => {
        accumulator[age] = accumulator[age] + 1 || 1
        return accumulator
    }, {}) // {} valor inicial do acumulador

    console.log(agesFrequency)


