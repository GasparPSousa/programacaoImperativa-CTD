// Criando o array filmes
let filmes = ["star wars", "clube da luta", "o poderoso chefão", "top gun", "interestelar"]

// Imprimindo o array filmes inicial.
console.log(filmes)


// Colocando todos os elementos do array filmes em MAiÚSCULAS
for( i = 0; i < filmes.length;i++) {
    filmes[i] = filmes[i].toUpperCase()
}
//  Imprimindo o array filmes em MAIÚSCULAS
console.log(filmes)


// Criando o array cartoons
let cartoons = ["toy story", "Procurando Nemo", "Kung-fu panda", "wally", "fortnite"]

// Imprimindo o array cartoons inicial.
console.log(cartoons)

// Removendo o último elemento do array cartoons
cartoons.pop()

// Imprimindo o array cartoons final.
console.log(cartoons)

// Criando uma função para adicionar elementos de um arrayAdicional em outro array
function transferindoElementosDeUmArrayParaOutro(array, arrayAdicional) {
    for(j = 0; j < arrayAdicional.length;j++) {
        array.push(arrayAdicional[j])
    }
}

// Evocando a função para adicionar os elementos do array cartoons no array filmes
transferindoElementosDeUmArrayParaOutro(filmes, cartoons)

// Imprimindo o array filmes com os elementos do array cartoons já adicionados.
console.log(filmes)

// // Inserindo os elementos do array cartoons no array filmes
// for(j = 0; j < cartoons.length; j++) {
//     filmes.push(cartoons[j])
// }
// // Imprimindo o array filmes com os elementos do array cartoons incluídos.
// console.log(filmes)



// Criando arrays de score

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8]
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]
if (asiaScores.length == euroScores.length) {
    for(i = 0; i < asiaScores.length; i++) {
        if (asiaScores[i] == euroScores[i]) {
            console.log(`As notas dos elementos de índice ${i} estão iguais`)
        } else {
            console.log(`As notas dos elementos de índice ${i} estão diferentes`)
        }
    }
}




