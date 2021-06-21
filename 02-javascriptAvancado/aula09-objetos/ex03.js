// Aula 09 - 21/06/21
// Objetos Literais

let carro = {
    placa: 'ADF1234',
    cor: 'prata',
    ano: 2021,
    flex: true,
    mostrar: function() {
        return 'Característivas do seu novo carro novo:\nPLACA='+carro.placa+
        '\nCOR='+ this.cor+
        '\nANO='+ this.ano+
        '\nTOTAL FLEX='+this.flex
    }
}

console.log(carro.mostrar());
