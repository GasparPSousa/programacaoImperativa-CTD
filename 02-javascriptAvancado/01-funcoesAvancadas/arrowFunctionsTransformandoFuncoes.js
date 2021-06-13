// Microdesadios

// Entender e aplicar transformações de funções comuns para arrow functions.

// Função comum
function print(mensagem) {
    console.log(mensagem)
}

print("Olá, bom dia")


// Fazendo a transformação da funcão print() para arrow functions.

let printArrow = mensagem => console.log(mensagem)

printArrow("Olá, bom dia")




// Função comum
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(21, 29))


// Fazendo a transformação da função soma() para arrow functions.

let somaArrow = (n1, n2) => n1 + n2

console.log(somaArrow(21, 29))

