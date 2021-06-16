const restaurante = {
    nome: 'Bom Sabor',
    cardapio: ["opção1", "opção2", "opção3", "opção4", "opção5"],

    entrada: function (nome, cardapio) {
        if(this.cardapio.length === 0) {
            console.log(`Olá, seja bem vindo ao restaurante ${this.nome}! \nCardápio ainda não cadastrado!`)
        } else {
            console.log(`Olá, seja bem vindo ao restaurante ${this.nome}! \nAqui está o cardápio:`)
        }
        for(prato of this.cardapio) {
            console.log(prato)
        }
    }
}


restaurante.entrada()