// PASSO 1 - Criando a Função Construtora

function Aluno(nome, quantidadeDeFaltas, notas) {

    // Definindo as propriedades
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;

    // PASSO 2 - Criando o método para calcular a média
    this.calcularMedia = function(notas) {

        // Calculando a soma
        let somaTotalNotas = this.notas.reduce((acumulador, item) => acumulador + item)
        
        // Calculando a media
        let media = somaTotalNotas / (this.notas.length)
        
        return media
    }

    // PASSO 3 - Criando um método para adicionar faltas
    this.adicionarFalta = function() {
        return this.quantidadeDeFaltas+=1
    }
}

module.exports = Aluno;






















// let aluno1 = new Aluno('Zezinho', 1, [10, 9, 8, 4])
// let aluno2 = new Aluno('Joãozinho', 2, [10, 8, 8, 8])

// console.log(aluno1)
// console.log(aluno1.calcularMedia())
// aluno1.adicionarFalta()
// console.log(aluno1)
// console.log(aluno1.nome)
// console.log(aluno1.quantidadeDeFaltas)
// console.log(aluno1.calcularMedia())





