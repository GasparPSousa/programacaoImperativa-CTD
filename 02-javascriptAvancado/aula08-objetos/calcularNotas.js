function Aluno(nome, numeroDoArquivo, listaDeNotas) {
    
    // Definindo as propriedades
    this.nome = nome;
    this.numeroDoArquivo = numeroDoArquivo;
    this.listaDeNotas = listaDeNotas;

    // Criando o método CalcularMedia
    this.calcularMedia = function() {
        let soma = 0
        for (let nota of this.listaDeNotas) {
            soma += nota;
        }
        
        return soma/this.listaDeNotas.length  
    }

    this.verificarStatus = function(calcularMedia) {
        if (this.calcularMedia() >= 7) {
            return `${this.nome} teve média ${this.calcularMedia()} e está Aprovado(a)!`
        } else {
            return `${this.nome} teve média ${this.calcularMedia()} e está Reprovado(a).`
        }
    }
}

let notas1 = new Aluno('Joaozinho', 45687, [8, 7, 10, 9])
let notas2 = new Aluno('Mariazinha', 45687, [8, 5, 4, 6])


console.log(notas1.verificarStatus())
console.log(notas2.verificarStatus())