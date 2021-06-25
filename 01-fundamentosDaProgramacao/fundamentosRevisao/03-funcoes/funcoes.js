// Funçoes Nomeadas(Declaradas) 

function multiplicar(a, b) {
    return a * b;
}

function tomarCerveja(quantidade) {
    return '🍺'.repeat(quantidade)
}


function comerPizza(quantidade) {
    return '🍕'.repeat(quantidade)
}

//Invocando as funções
console.log(multiplicar(6,784))
console.log(tomarCerveja(6))
console.log(comerPizza(8))
console.log(`Daqui a pouco vou tomar umas ${tomarCerveja(3)} cervajas e com umas ${comerPizza(2)} pizzas`)

