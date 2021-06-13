let pessoa = {
    nome: 'Gaspar',
    tamanho: 1.76,
    profissao: 'Back-End Developer',
    serieFavoritas: ['Breaking Bad', 'Peaky Blinders', 'Ozark', 'Vikings', 'La Casa de Papel', 'The Laste Dance', "The Queen's Gambit"]
}

// Fazendo a desustruração do objeto pessoa.
// E renomeando a propriedade "tamanho" para "altura".
let {nome, tamanho: altura, profissao, serieFavoritas} = pessoa;

console.log(pessoa)
console.log(nome)
console.log(altura)
console.log(profissao)
console.log(serieFavoritas)


// Funciona para Arrays também. 
let listaCompras = ["banana", "ovos", "bacon", "abacate"]

// Mas nesse caso preciso colocar nas posições exatas.
const [item1, ,item3, item4] = listaCompras

console.log(item1)
// console.log(item2)
console.log(item3)
console.log(item4)