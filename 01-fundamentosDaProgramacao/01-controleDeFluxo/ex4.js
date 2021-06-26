// Refatorando

function verificarStatus(status) {

    // Criando a condicional dentro da função
    if (status) {
        return 'O valor é true-verdadeiro'
   } else {
        return 'O valor é false - falso'
    }
}


console.log(verificarStatus(false))
console.log(verificarStatus(true))