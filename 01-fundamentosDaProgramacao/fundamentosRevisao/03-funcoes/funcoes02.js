// Functions Expression(Expressão de Função)

let subtrair = function(number1, number2) {
    return number1 - number2
}

let fazerHamburger = function(quantidade) {
    return '🍔'.repeat(quantidade)
}


// Invocando as funcões
console.log(subtrair(58, 97))
console.log(fazerHamburger(3))
console.log(`Não estou afim de comer ${fazerHamburger(3)} hoje.`)

