
function verificarSeEPrimo(numero) {
    
    let contador = 0;

    // Um número primo é divisível por 1 e por ele mesmo. 
    // Ou seja 2 números apenas. Logo preciso contar os números divisíveis.
    for(let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++
        }
    }

    if(contador == 2) {
        console.log(`O numero ${numero} é um número primo`)
    } else {
        console.log(`O número ${numero} não é um número primo`)
    }
}

verificarSeEPrimo(2)
verificarSeEPrimo(3)
verificarSeEPrimo(4)
verificarSeEPrimo(15)
verificarSeEPrimo(17)
verificarSeEPrimo(20)
verificarSeEPrimo(467)








