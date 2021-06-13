const somar = (numeroA, numeroB) => numeroA + numeroB;

const subtrair = (numeroA, numeroB) => numeroA - numeroB;

const multiplicar = (numeroA, numeroB) => numeroA * numeroB;

const dividir = (numeroA, numeroB) => numeroA / numeroB;  // Depois pensar numa forma de fazer o tratamento quando numeroB = 0;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 5, somar))
console.log(calculadora(10, 5, subtrair))
console.log(calculadora(10, 5, multiplicar))
console.log(calculadora(10, 5, dividir))



