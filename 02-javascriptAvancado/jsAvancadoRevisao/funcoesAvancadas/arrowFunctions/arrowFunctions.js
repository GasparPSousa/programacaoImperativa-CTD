// Arrow Functions

// Estrutura Básica

function multiplicar(a, b) {
    return a * b
}

// Versão reduzida - Arrow Function

let arrowMultiplicar = (a, b) => a * b ;

console.log(multiplicar(6, 55))
console.log(arrowMultiplicar(6, 55))

// Com mais de uma linha de código, precisamos usar as chaves e return

let multiplo = (numberA, numberB) => {
    let resto = numberA % numberB;
    return resto == 0;
}

console.log(multiplo(6, 3))

let bemVindo = () => 'Hello World!'

let triplo = number => number * 3;

let subtrair = (a, b) => a - b;

let horaAtual = () => {
    let data = new Date();
    return `${data.getHours()}:${data.getMinutes()}`
}

console.log(bemVindo())
console.log(triplo(5))
console.log(subtrair(9, 7))
console.log(horaAtual())
