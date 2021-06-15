function Restaurante(nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;


};

let cardapio = ["opção1", "opção2", "opção3", "opção4", "opção5"]
let restaurante = new Restaurante('Bom Sabor', cardapio)

const restauranteObjeto = {

    saudacao: function entrada(nome, cardapio) {
        if(restaurante.cardapio.length === 0) {
            console.log(`Olá, seja bem vindo ao restaurante ${restaurante.nome}! \n Cardápio ainda não cadastrado!`)
        } else {
            console.log(`Olá, seja bem vindo ao restaurante ${restaurante.nome}! \nAqui está o cardápio:`)
        }
        for(prato of restaurante.cardapio) {
            console.log(prato)
        }
    }

}

restauranteObjeto.saudacao()









