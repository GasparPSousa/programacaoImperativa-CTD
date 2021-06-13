/*

Podemos dizer que OBJETOS Literais SÂO REPRESENTAÇÕES em código de UM ELEMENTO da vida real.

*/

let carro = {
    placa: 'ADF1238'
};


let tenista = {
    nome: 'Roger',
    sobrenome: 'Federer',
    idade: 38,
    ativo: true,
    saudacao: function() {
        return `Olá, me chamo ${this.nome} ${this.sobrenome}`;
    }

};

console.log(tenista)

console.log(tenista.nome)
console.log(tenista.sobrenome)
console.log(tenista.saudacao())



/* 

Funções Contrutoras

*/

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};


let meuCarro = new Carro('Ford', 'Falcon');

console.log(meuCarro)

let outroCarro = new Carro('Chevrolet', 'Corvette')

console.log(outroCarro)
console.log(outroCarro.marca)
console.log(outroCarro.modelo)

