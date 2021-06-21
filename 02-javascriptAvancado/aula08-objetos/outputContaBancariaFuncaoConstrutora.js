const Conta = require("./contaBancariaFuncaoConstrutora");

let conta1 = new Conta(321654, 6000, "Joaozinho")
let conta2 = new Conta(456987, 90000, "Mariasinha")
let conta3 = new Conta(852963, 10000, 'Zé das Couves')

console.log("Acessando os dados da conta1")
console.log(conta1.numeroDaConta)
console.log(conta1.saldo)
console.log(conta1.nomeDoTitular)
console.log("\nAcessando os dados da conta2")
console.log(conta2.numeroDaConta)
console.log(conta2.saldo)
console.log(conta2.nomeDoTitular)
console.log("\nAcessando os dados da conta3")
console.log(conta3.numeroDaConta)
console.log(conta3.saldo)
console.log(conta3.nomeDoTitular)
console.log("\nAcessar os métodos utilizando a conta1")
conta1.deposito(800) // Fazendo depósito
conta1.saque(500)    // Fazendo saque
conta1.deposito(-8000) // Fazendo deposito negativo
conta1.saque(50000)  // Fazendo saque com valor maior que o saldo
conta1.deposito(-10000)  // Depositando valor negativo
conta1.extrato()     // Olhando o extrato
conta1.saque(-500)  // Fazendo saque negativo
console.log("\nAcessar os métodos utilizando a conta2")
conta2.deposito(800) // Fazendo depósito
conta2.deposito(-8000) // Fazendo deposito negativo
conta2.saque(500)    // Fazendo saque
conta2.saque(50000)  // Fazendo saque com valor maior que o saldo
conta2.deposito(-10000)  // Depositando valor negativo
conta2.extrato()     // Olhando o extrato
conta2.saque(-500)  // Fazendo saque negativo
console.log("\nAcessar os métodos utilizando a conta3")
conta3.deposito(800) // Fazendo depósito
conta3.saque(500)    // Fazendo saque
conta3.deposito(-8000) // Fazendo deposito negativo
conta3.saque(50000)  // Fazendo saque com valor maior que o saldo
conta3.deposito(-10000)  // Depositando valor negativo
conta3.extrato()     // Olhando o extrato
conta3.saque(-500)  // Fazendo saque negativo
