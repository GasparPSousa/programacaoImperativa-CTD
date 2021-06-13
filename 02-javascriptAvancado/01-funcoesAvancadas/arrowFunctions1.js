let soma = (num1, num2) => num1 + num2; // Se for apenas um linha, não precisa de chaves.

console.log(soma(2,5))


let dobro = num => num * 2;

console.log(dobro(5))


let Par = numero => {
    if (numero % 2 == 0) {
        return true;
    } 
    return false
}

console.log(Par(6))
console.log(Par(7))

const somarrr = function() {

}

const somar = () => console.log("Estou em uma Arrow Function") 


somar()
