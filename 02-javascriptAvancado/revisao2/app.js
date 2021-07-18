

// Callbacks e Arrow Functions
// Criando uma calculadora para relembrar os conceitos de Callbacks e Arrow Functions
const sum = (numberA, numberB) => numberA + numberB
const subtract = (numberA, numberB) => numberA - numberB
const multiply = (numberA, numberB) => numberA * numberB
const divide = (numberA, numberB) => numberB != 0 ? numberA / numberB : "Impossível Calcular"

console.log(divide(3, 4))
console.log(divide(4, 0))

const calculator = (numberA, operation, numberB) => operation(numberA, numberB)
console.log(calculator(10, divide, 2))
console.log(calculator(5, multiply, 6))
console.log(calculator(57, subtract, 50))
console.log(calculator(99, divide, 33))
console.log(calculator(10, divide, 0))