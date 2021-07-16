// const url = 'https://jsonplaceholder.typicode.com/users'


// const getUsers = () => {
//     const userData = fetch(url).then(userData => {
//         console.log(userData)
//     })
//     console.log(userData)
// }

// getUsers()

/* 

Funções async sempre retornam uma promise;

Se a função retorna um valor, a promise será resolvidade com esse valor;

Se a função lança um erro, a promisse é rejeitada.

Usamos a palavra async antes da declaração de uma função. 
E usamos ela para indicar que a função declarada é uma função é assíncrona.
Essa função vai se comportar de maneira diferente,  ela vai retornar uma promise! Mesmo que você não tenha escrito de forma explícita isso.


*/


// function greet() {
//     return 'hello'
// } // retorna uma string normalmente

async function greet() {
    return 'hello'
}

greet().then(value => {
    console.log(value)
})

async function add(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw 'firstNumber e secondNumber devem ser números'
    }
        
    return firstNumber + secondNumber
}