// Item 1

produtos = [
    {
    nomeDoProduto: 'Computador',
    valorDoProduto: 5000,
    qualidadeDoProduto: 90,
    status: true
    },

    {
    nomeDoProduto: 'Kindle',
    valorDoProduto: 500,
    qualidadeDoProduto: 95,
    status: true
    },

    {
    nomeDoProduto: 'Bateria',
    valorDoProduto: 400,
    qualidadeDoProduto: 80,
    status: true
    },

    {
    nomeDoProduto: 'Mouse',
    valorDoProduto: 60,
    qualidadeDoProduto: 70,
    status: true
    },

    {
    nomeDoProduto: 'Celular',
    valorDoProduto: 1200,
    qualidadeDoProduto: 91,
    status: true
    },
];
console.log('De todos os produtos')
console.log(produtos)


// Item 2

const carrinho = produtos.filter((produto) => {
    const valor = produto.valorDoProduto;
    const qualidade = produto.qualidadeDoProduto;
    const status = produto.status;

    const itensSelecionados = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true);

    return itensSelecionados;

})

console.log('\nDo carrinho')
console.log(carrinho)





