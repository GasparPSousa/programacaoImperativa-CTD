// Parâmetro Rest

// Usando como ÚLTIMO parâmetro de uma função, ele nos permite CAPTURAR 
// cada um dos ARGUMENTOS adicionais passados para essa FUNÇÃO.

// É escrito da mesma forma que o Spread Operator...
// A diferença é que ele é utilizado durante a definição da função e não durante sua execução.

// Irá gerar um array com todos os argumentos adicionais passados para a função.

// Como o parâmetro captura todos os argumentos restantes, ele deve ser sempre o último parâmetro da função, 
// caso contrário, obteremos um erro.

function somar(...numeros) {
    return numeros.reduce((acumulador, num) => acumulador += num)
}

console.log(somar(5, 5, 5))
console.log(somar(21, 48, 95, 43))
