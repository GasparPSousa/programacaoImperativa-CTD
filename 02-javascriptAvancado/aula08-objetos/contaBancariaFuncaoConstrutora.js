// criando a Funcção Construtora
function Conta(numeroDaConta, saldo, nomeDoTitular) {

    // Definindo as propriedades
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
    this.nomeDoTitular = nomeDoTitular;

    // Criando o método deposito
    this.deposito = function(valor) {
        // Verificando se o valor do depósito é zero ou negativo.
        if (valor <= 0) {
            console.log("Não é possível fazer depósito negativo. Favor inserir um valor positivo.")

        //Fazendo a operação de depósito e imprimindo na tela o valor do depósito e o saldo atualizado.
        } else {
            this.saldo += valor;
            console.log(`Foi feito um Depósito de R$${valor} na sua conta e seu novo saldo é R$${this.saldo}`)
        }
        
    };

    // Criando o método saque
    this.saque = function(valor) {
        // Verificando se o valor do saque zero ou negativo.
        if (valor <= 0) {
            console.log("Não é possível fazer saque negativo. Favor inserir um valor positivo.")

        // Verificando se existe saldo suficiente na conta para sacar.
        } else if (valor > this.saldo) {
            console.log("Fundos Insuficientes")

        // Fazendo a operação saque e imprimindo na tela o valor do saque e o saldo atualizado.
        } else {
            this.saldo -= valor;
            console.log(`Foi feito um Saque de R$${valor} da sua conta e seu novo saldo é R$${this.saldo}`)
            return this.saldo;
            
        } 
        
    };

    this.extrato = function() {
        // Imprimindo na tela o saldo atualizado.
        console.log(`==========Extrato==========\nNome: ${this.nomeDoTitular} Conta: ${this.numeroDaConta} Seu saldo é R$${this.saldo}`)
        console.log('===========================')
    };

    // Criando o método transferência -  Preciso terminar essa parte
    // this.transferencia = function(valor, conta) {
    //     valorTransferido = this.saque(valor)
    //     conta.deposito(valorTransferido)

    // }
    
}
// let conta1 = new Conta(321654, 6000, "Joaozinho")
// let conta2 = new Conta(456987, 90000, "Mariasinha")

// console.log("Acessando os dados da conta1")
// console.log(conta1.numeroDaConta)
// console.log(conta1.saldo)
// console.log(conta1.nomeDoTitular)
// console.log("\nAcessando os dados da conta2")
// console.log(conta2.numeroDaConta)
// console.log(conta2.saldo)
// console.log(conta2.nomeDoTitular)
// console.log("\nAcessar os métodos utilizando a conta1")
// conta1.deposito(800) // Fazendo depósito
// conta1.saque(500)    // Fazendo saque
// conta1.deposito(-8000) // Fazendo deposito negativo
// conta1.saque(50000)  // Fazendo saque com valor maior que o saldo
// conta1.deposito(-10000)  // Depositando valor negativo
// conta1.extrato()     // Olhando o extrato
// // conta1.saque(-500)  // Fazendo saque negativo
// // conta1.transferencia(2000, conta2)



module.exports = Conta;