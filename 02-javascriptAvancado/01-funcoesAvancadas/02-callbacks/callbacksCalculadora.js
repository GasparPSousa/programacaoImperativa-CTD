const somar = (numeroA, numeroB) => numeroA + numeroB;

const subtrair = (numeroA, numeroB) => numeroA - numeroB;

const multiplicar = (numeroA, numeroB) => numeroA * numeroB;

const dividir = (numeroA, numeroB) => {
    if (numeroB != 0) {
        return numeroA/numeroB;
    } else {
        return "Impossível calcular";
    }
};
                                        

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10, 5, somar))
console.log(calculadora(10, 5, subtrair))
console.log(calculadora(10, 5, multiplicar))
console.log(calculadora(10, 5, dividir))
console.log(calculadora(10, 0, dividir))



