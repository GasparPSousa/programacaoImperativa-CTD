/* 

Data: 12/07/21
Aula 15 - Promises

SetTimeOut
Esperando o tempo limite

*/

console.log("Requisição em andamento....")
setTimeout(
    function() { funcaoConectar("Server Conectado - OK")}, 2000);

function funcaoConectar(value) {
    console.log(value)
}