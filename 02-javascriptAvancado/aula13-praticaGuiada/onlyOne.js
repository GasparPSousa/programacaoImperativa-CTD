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

// PASSO 1 - Instânciando alunos
let aluno1 = new Aluno('Zezinho', 0, [10, 9, 8, 4])
let aluno2 = new Aluno('Joãozinho', 1, [7, 7, 7, 7])
let aluno3 = new Aluno('Carlinhos', 3, [10, 6.5, 7.5, 7])
let aluno4 = new Aluno('Mariazinha', 1, [10, 10, 10, 10])
let aluno5 = new Aluno('Joaninha', 0, [10, 9, 8, 5])

// Testando as instâncias e a Função Construtora
// console.log('\nAluno1')
// console.log(aluno1)
// console.log(aluno1.calcularMedia())
// console.log(aluno1.adicionarFalta())

// console.log('\nAluno2')
// console.log(aluno2)
// console.log(aluno2.calcularMedia())
// console.log(aluno2.adicionarFalta())

// console.log('\nAluno3')
// console.log(aluno3)
// console.log(aluno3.calcularMedia())
// console.log(aluno3.adicionarFalta())

// console.log('\nAluno4')
// console.log(aluno4)
// console.log(aluno4.calcularMedia())
// console.log(aluno4.adicionarFalta())

// console.log('\nAluno5')
// console.log(aluno5)
// console.log(aluno5.calcularMedia())
// console.log(aluno5.adicionarFalta())



// PASSO 3 - Criando um objeto literal curso.

const curso = {
    nomeDoCurso: 'CTD',
    notaDeAprovacao:7,
    faltasMaximas: 2,
    listaDeEstudantes: [],
    
    // PASSO 4 - Criando o método para adicionar Alunos na Lista de Estudandes.
    adicionarAlunos:function(aluno) {
        this.listaDeEstudantes.push(aluno)
    },

    // PASSO 5 - Criando o método para avaliar os alunos.
    avaliarAluno:function(aluno) {

        const mediaFinal = aluno.calcularMedia();
        const qtdDeFaltas = aluno.quantidadeDeFaltas;

        if ((mediaFinal >= this.notaDeAprovacao) && (qtdDeFaltas < this.faltasMaximas)) {
            return true
        } else if ((qtdDeFaltas == this.faltasMaximas) && (mediaFinal >= this.notaDeAprovacao * 1.1)){
            return true
        } else {
            return false
        }
    },

    // PASSO 6 - Criando um método para retornar um array de booleanos(listar os resultados(true = aprovado or false = reprovado) dos alunos).
    listaResultados: function() {
        let byAluno = this.listaDeEstudantes.map(item => this.avaliarAluno(item))
        return byAluno
    }


}

// console.log('Objeto curso Inicial')
console.log()
console.log(curso)
console.log('\nLista de Estudantes Inicial')
console.log(curso.listaDeEstudantes)
console.log('\nAdicionando alunos na lista....')
curso.adicionarAlunos(aluno1)
curso.adicionarAlunos(aluno2)
curso.adicionarAlunos(aluno3)
curso.adicionarAlunos(aluno4)
curso.adicionarAlunos(aluno5)
console.log('\nLista de Estudantes Populada')
console.log(curso.listaDeEstudantes)
console.log('\nVerificar quem está aprovado')
// console.log(curso.avaliarAluno(aluno1))
// console.log(curso.avaliarAluno(aluno2))
// console.log(curso.avaliarAluno(aluno3))
// console.log(curso.avaliarAluno(aluno4))
// console.log(curso.avaliarAluno(aluno5))
console.log(curso.listaResultados())
console.log('\nAdicionando 1 falta em todos alunos')
aluno1.adicionarFalta()
aluno2.adicionarFalta()
aluno3.adicionarFalta()
aluno4.adicionarFalta()
aluno5.adicionarFalta()
console.log('\nVerificar quem está aprovado')
console.log(curso.listaResultados())