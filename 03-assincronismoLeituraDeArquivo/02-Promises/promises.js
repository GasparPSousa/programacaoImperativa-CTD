const myFunc1 = () => 'Function1'
const myFunc2 = () => 'Function2'

console.log(myFunc1())
console.log(myFunc2())

/*  
 - Código acima é executado em UMA ÚNICA thread!
 - Isso significa que ele só pode fazer UMA COISA de cada uma vez.
 - Ou seja, é executado de cima para baixo, passo a passo de forma SÍNCRONA.
 - É esse sincronismo que possibilita que quando a gente invoque as duas funções acima sequencialmente,
 a execução da 2º função só seja feita depois da execução da 1º função, 
 INDEPENDENTE do tamanho do código dentro dos blocos dessas funções.
 - O código SÍNCRONO espera uma ação ser FINALIZADA antes de partir para uma PRÓXIMA ação.
 
*/

/* 
 - Mas o JavaScript também executa código ASSÍNCRONO!
 - setTimeout(() => {}, milliseconds)
 - Código ASSÍNCRONO pode iniciar um processo agora e finalizar esse processo posteriormente.
 - RESQUESTS são exemplos de operação ASSÍNCRONA.

*/


 let randomNumber = 9

 setTimeout(() => {
     randomNumber += 100
     console.log(randomNumber)

 }, 3000)


 console.log(randomNumber)



/* 
 - Uma PROMISE pode envolver, encapsular uma operação ASSÍNCRONA.
 
 - Quando você escreve uma PROMISE, seu código para a ter 3 vantagens que merecem destaque.
 1º - Você ganha mais controle e legibilidade no fluxo de lógicas assíncronas.
 2º - Você reduz o acoplamento entre funções de callbacks.
 3º - Você tem mais previsibilidade e detalhamento no tratamento de erros.

 - Como criar uma PROMISE?
 - Na maioria das vezes vamos consumir uma promise criada por alguém ou por uma biblioteca de terceiros.
*/

/* 
 - Promise é uma função construtora que precisa receber uma função como argumento
 e essa função vai envolver a operação assícrona que a gente criar.
 
 - Quando criamos uma promise, essa função que passamos por argumento precisa receber dois parâmetros,
 resolve, reject - esses nomes são uma convenção universal. 
 
 - São duas funções que podem ser invocadas dentro da função que acabamos de criar
 resolve deve ser invocada quando a operação assíncrona que a gente fizer for bem sucedida.
 reject deve ser invocada quando a operação assíncrona que a gente fizer falhar.

 - Só é possível fazer o encadeamento do the(), porque o método then() sempre retorna uma nova promise(),
 que por sua vez possui o método then() disponível por padrão. Ou seja, um then() pode ser encadeado no outro
 quantas vezes forem necessárias.

 - Para tratar erro usando Promises, usamos o método .catch() encadeado no then()

 - O catch() só vai ser executado em duas situações:
 1º - Quando o método reject dentro da função de criacao da Promise é invocado.
 2º - Quando o código dentro de algum then() lança um erro.

*/

// Apenas um exemplo para aprender a sintaxe de uma Promise, como ela é criada e como podemos usar ela.
const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37

    // resolve(aNumber)
    reject(aNumber)
}) 

aPromise
    .then((value) => value)
    .then((value) => {
        console.log(value)
    })
    .catch(rejectValue => {
        console.log({rejectValue})
    })


// Observa que a operação acima não é assim assíncrona.

