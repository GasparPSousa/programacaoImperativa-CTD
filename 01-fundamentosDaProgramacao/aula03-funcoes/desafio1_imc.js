
function calcularIMC(peso, altura) {
    imc = peso / ((altura / 100) * (altura / 100))
    imcDecimal = Math.round(imc * 10) / 10
    return imcDecimal
}

console.log(calcularIMC(74, 175))
console.log(calcularIMC(49, 165))
console.log(calcularIMC(65, 170))
console.log(calcularIMC(85, 180))