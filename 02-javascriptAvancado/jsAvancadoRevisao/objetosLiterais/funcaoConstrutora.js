// Função Construtora

// A Função Construtora nos permite montar um molde, uma forma, um template e então criar todos os objetos que precisamos.

// A função recebe um parâmetro para cada propriedade que queremos atribuir ao objeto.

function Carro(marca, modelo, cor, ano) {

    // Definindo as propriedades
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;

    // Definindo os métodos
    this.andar = function(){
        return `O carro ${this.modelo} está em movimento.`
    }

    
}

// Instânciando alguns objetos(no caso,  alguns carros)
let meuCarro = new Carro('Ford', 'Falcon', 'Preto', '1990')
let outroCarro = new Carro('Chevrolet', 'Corvette', 'Amarelo', '2000')

// Acessa as propriedades do objeto meuCarro
console.log(meuCarro.modelo)
console.log(meuCarro.marca)
console.log(meuCarro.cor)
console.log(meuCarro.ano)

// Acessa as propriedades do objeto outroCarro
console.log(outroCarro.modelo)
console.log(outroCarro.marca)
console.log(outroCarro.cor)
console.log(outroCarro.ano)

console.log()
// Invocando o método andar()
console.log(meuCarro.andar())
console.log(outroCarro.andar())

console.log()
// Criando uma lista de carros
listaDeCarros = [meuCarro, outroCarro]

console.log(listaDeCarros)


