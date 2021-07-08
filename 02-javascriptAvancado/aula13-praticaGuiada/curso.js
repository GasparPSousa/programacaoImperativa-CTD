// PASSO 3
const alunos = require('./alunos')

const curso = {
    nomeDoCurso: 'CTD',
    notaDeAprovacao:7,
    faltasMaximas: 2,
    listaDeEstudantes:[], 
    
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
    },

    // PASSO 7 - Criando o método remover aluno
    removerAluno: function(){
        this.listaDeEstudantes.shift()
    }
    

}

console.log('Objeto curso Inicial')
console.log(curso)
console.log('Lista de Estudantes Inicial')
console.log(curso.listaDeEstudantes)
curso.adicionarAlunos(alunos.aluno1)
curso.adicionarAlunos(alunos.aluno2)
curso.adicionarAlunos(alunos.aluno3)
curso.adicionarAlunos(alunos.aluno4)
curso.adicionarAlunos(alunos.aluno5)
console.log('Lista de Estudantes Populada')
console.log(curso.listaDeEstudantes)
console.log(curso.listaResultados())
console.log(curso.avaliarAluno(alunos.aluno2))
alunos.aluno2.adicionarFalta()
console.log(curso.avaliarAluno(alunos.aluno2))
console.log(curso.listaResultados())



// PASSO 7
// Para substituir a lista de estudantes, primeiro vou esvaziar essa lista.

// Criando o método para esvaziar a lista
function esvaziandoLista(tamanho) {
    for(i = 1; i <= tamanho; i++) {
        curso.removerAluno()
    }
}
// Calculando o tamanho da lista
tamanhoDaLista = curso.listaDeEstudantes.length

// console.log(tamanhoDaLista)

// Invocando a função esvaziando a lista
esvaziandoLista(tamanhoDaLista)

// console.log(curso.listaDeEstudantes.length) - Para confirmar que a lista está fazia

// Ao invés de criar uma lista no arquivo alunos, preferi criar nesse arquivo para não mudar o que fiz anteriormente.
// Pois antes eu exportei vários objetos dentro de um objeto, nesse caso teria que exportar uma lista dentro de um objeto.
lista_de_estudantes = [alunos.aluno1, alunos.aluno2, alunos.aluno3, alunos.aluno4, alunos.aluno5]


// Depois de esvaziar a lista, agora estou populando com uma nova lista. 
// Completando a substituição do conteúdo da lista
lista_de_estudantes.forEach(item => curso.adicionarAlunos(item));

// console.log(curso.listaDeEstudantes) // Para confirmar que foi substituída

// Para confirmar que mesmo depois da substituição tudo continua funcionando corretamente.
console.log(curso.listaResultados())


