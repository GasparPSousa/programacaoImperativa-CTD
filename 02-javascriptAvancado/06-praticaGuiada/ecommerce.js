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

const carrinho = produtos.filter((item) => {
    const valor = item.valorDoProduto;
    const qualidade = item.qualidadeDoProduto;
    const status = item.status;

    const itensSelecionados = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true);

    return itensSelecionados;

})

console.log('\nDo carrinho')
console.log(carrinho)

// Item 3

carrinho.forEach((item) => {
    console.log(`\nProduto: ${item.nomeDoProduto}`);
    console.log(`Valor: R$ ${item.valorDoProduto}`);
    console.log("=================================")
})

const valorTotal = carrinho.reduce((acc, item) => {
    return acc.valorDoProduto + item.valorDoProduto;
})

console.log(`\nValor Total: R$ ${valorTotal}`)

