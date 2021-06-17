// Criando o objeto conta
const conta = {

    //Definindo as propriedades.
    numeroDaConta: 123456,
    saldo: 5000,
    nomeDoTitular: "Zezinho",


    // Criando o método depósito
    deposito: function(valor) {
        // Verificando se o valor do depósito é zero ou negativo.
        if (valor <= 0) {
            console.log("Não é possível fazer depósito negativo. Favor inserir um valor positivo.")

        //Fazendo a operação de depósito e imprimindo na tela o valor do depósito e o saldo atualizado.
        } else {
            this.saldo += valor;
            console.log(`Foi feito um Depósito de R$${valor} na sua conta e seu novo saldo é R$${this.saldo}`)
        }
        
    },

    // Criando o método saque
    saque: function(valor) {
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
        }
        
    },

    // Criando o método extrato
    extrato: function() {
        // Imprimindo na tela o saldo atualizado.
        console.log(`O saldo na sua conta é R$${this.saldo}`)
    }

}

conta.extrato() // Verificando o extrato
conta.deposito(500) // Fazendo deposito
conta.deposito(1000) // Fazendo deposito
conta.extrato() // Verificando o extrato
conta.saque(800) // Fazendo o saque
conta.deposito(-800) // Testando o deposito negativo
conta.extrato() // Verificando o extrato
conta.deposito(2000) // Fazendo o deposito
conta.saque(-1000) // Testando saque negativo
conta.extrato() // Verificando o extrato
conta.saque(15000) // Tentando sacar um valor acima do saldo







