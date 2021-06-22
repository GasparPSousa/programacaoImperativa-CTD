function CalcularNotas(nome, numeroDoArquivo, listaDeNotas) {
    
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
        console.log(soma)
        return soma/this.listaDeNotas.length
            
    }
}

let notas1 = new CalcularNotas('zezinho', 45687, [8, 6, 4, 6])

console.log(notas1.calcularMedia())