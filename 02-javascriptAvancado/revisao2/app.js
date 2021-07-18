

// Arrow Functions e Callbacks

/* 
    Arrow Functions - É a mesma coisa que uma function normal, mas numa versão mais reduzida

    Callbacks - É uma função que é passada como parâmetro para outra função. 
    A função que recebe é responsável por executá-la quando necessário.

*/

// Criando várias Arrow Functions 
const sum = (numberA, numberB) => numberA + numberB
const subtract = (numberA, numberB) => numberA - numberB
const multiply = (numberA, numberB) => numberA * numberB
const divide = (numberA, numberB) => numberB != 0 ? numberA / numberB : "Impossível Calcular"

console.log(divide(3, 4))
console.log(divide(4, 0))

// Criando a função calculator e passando um callback(operation)
const calculator = (numberA, operation, numberB) => operation(numberA, numberB)
console.log(calculator(10, divide, 2))
console.log(calculator(5, multiply, 6))
console.log(calculator(57, subtract, 50))
console.log(calculator(99, divide, 33))
console.log(calculator(10, divide, 0))

// Closure

/* 
    Closures - São funções aninhadas, ou seja, funções que vivem dentro de outras funções.

    Uma closure tem acesso a TODOS os PARÂMETROS e VARIÁVEIS que a função pai está recebendo ou declarando 
    sem ter que passá-los como parâmetro.

    Se busca otimizar o desempenho dos nossos scripts.

*/

function init() {
    var name = 'Mozilla'

    function displayName() {
        alert(name)
    }

    displayName()
}

init()


function makeFunc() {
    var name = "Gaspar";
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();




