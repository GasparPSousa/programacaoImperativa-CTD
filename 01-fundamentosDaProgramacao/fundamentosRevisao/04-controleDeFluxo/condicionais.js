// Condicionais


function verificarAcesso(idade) {

    // Criando as condicionais dentro de uma função
    if (idade < 16) {
        acesso = 'Acesso Proibido'

    } else if (idade >= 16 && idade <= 18) {
        acesso = 'Acesso liberado somente com acompanhante maior de idade'

    } else {
        acesso= 'Acesso Liberado'
    }

    return acesso
    
}

// Invocando as funções
console.log(verificarAcesso(10))
console.log(verificarAcesso(16))
console.log(verificarAcesso(17))
console.log(verificarAcesso(18))
console.log(verificarAcesso(19))
console.log(verificarAcesso(20))
