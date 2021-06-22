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
            return false;
        // Verificando se existe saldo suficiente na conta para sacar.
        } else if (valor > this.saldo) {
            console.log("Fundos Insuficientes")
            return false

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

    //Criando o método transferência -  Preciso terminar essa parte
    this.transferencia = function(valor, conta) {
        let saque = this.saque(valor)
        if (typeof(saque == Boolean) && !saque){
            return 'Não é possível fazer essa transferência'
        }
        conta.deposito(valor)

    }
    
}


module.exports = Conta;