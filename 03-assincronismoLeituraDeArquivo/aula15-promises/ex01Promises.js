/* 

Data: 12/07/21
Aula 15 - Promises

O que são Promises?
É um objeto javascript que vincula:
    1 - A produção de código
    2 - O consumo do código

Propriedades do Objeto Promise:
    - Pendente
    - Realizada
    - Rejeitada
   
*/

function meuVerificador(resposta) {
    console.log(resposta)
}

let minhaPromessa = new Promise(
    function(Resolve, Reject) {
        let x = 0;
        if(x == 0) {
            Resolve("Tudo ok")
        } Reject("Deu errado")
    }
);

minhaPromessa
    .then(function(Resolve) {
        meuVerificador(Resolve)
    })
    .catch((Reject) => {
        console.log(Reject)
    });