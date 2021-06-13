// Aula 06 - 09/06/2021
// Repetições - For

exibirTipo(100);

function exibirTipo(limite) {
    for (let i = 0; i < limite; i++ ) {
        if (i%2 != 0) {
            console.log(i + " ÍMPAR")
        } else {
            console.log(i + " PAR")
        }
    }
}