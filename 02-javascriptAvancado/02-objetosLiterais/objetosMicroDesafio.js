function Restaurante(nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;

};

let cardapio = ['opção1', 'opção2', 'opção3']
let restaurante = new Restaurante('Bom Sabor', cardapio)

const restauranteObjeto = {

    saudacao: function entrada(nome, cardapio) {
        console.log(`Olá, seja bem vindo ao restaurante ${restaurante.nome}! Aqui está o cardápio ${restaurante.cardapio}.`)
    }

}

restauranteObjeto.saudacao()









