const novoArray = [1, 5, 95, 45, 78, 98, 63, 72]

function nome(array) {
    for (let indice = 0; indice < novoArray.length; indice++) {
        novoArray[indice] = novoArray[indice] + 2
        
    }
    return novoArray
}

function mostrar(array) {
    console.log(nome[array])

}

mostrar(novoArray)
