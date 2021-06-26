// Recursividade

// Se aplica quando uma função invoca ela mesma. 
// É muito utilizado para chamar a mesma tarefa várias vezes, parecido com um loop(ciclo)


// função que faz uma contagem regressiva a partir de um determinado número até zero
function countDown(number) {
    
    console.log(number);

    let nextNumber = number - 1;

    if (nextNumber >= 0) {
        countDown(nextNumber)
    }
}

countDown(5)

// função que soma os digitos de uma número
function somaDosDigitos(numero) {
    if (numero == 0) {
        return 0;
    }

    return somaDosDigitos(Math.floor(numero / 10)) + numero % 10 
}

console.log(somaDosDigitos(22))


// função que calcula o somatório de um número. S(n) = 1 + 2 + 3 + 4 + .... + (n - 1) + n 
function somatorio(numero) {
    if (numero <= 1) {
        return 1;
    } else {
        return numero + somatorio(numero - 1);
    }
}

console.log(somatorio(5))

// função para calcular o fatorial de um número. F(n) = n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1
function fatorial(numero) {
    if (numero <= 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))


// função para calcular a sequência de Fibonacci. F(n) = F(n-1) + F(n-2)
function fibonacci(numero) {
    if (numero == 0) {
        return 0
    } else if (numero == 1) {
        return 1
    } else {
        return fibonacci(numero - 1) + fibonacci(numero - 2)
    }
}

console.log(fibonacci(18))