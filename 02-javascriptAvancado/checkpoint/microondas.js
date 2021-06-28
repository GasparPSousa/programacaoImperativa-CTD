
// Função para o usuário escolher o prato e o tempo.
function menu(prato, tempoUsuario) {
    
    let tempoPadrao;

    // Criando um switch para obter opções de prato disponíveis
    switch (prato) {
        
        case 'Pipoca':
            tempoPadrao = 10;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;

        case 'Macarrão':
            tempoPadrao = 8;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;

        case 'Carne':
            tempoPadrao = 15;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;
        
        case 'Feijão':
            tempoPadrao = 12;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;
        
        case 'Brigadeiro':
            tempoPadrao = 8;
            verificarTempo(tempoPadrao, tempoUsuario)
            break;

        default:
            console.log('Prato Inexistente')
    }
}

// Função para gerar a lógica do output com base no Tempo e nas condições passadas.
function verificarTempo(tempoPadrao, tempoUsuario) {
    
    if (tempoUsuario < tempoPadrao) {
        console.log('Tempo insuficiente')
    } 
    else if (tempoUsuario > 3 * tempoPadrao) {
            console.log('Kabumm')
    } 
    else if (tempoUsuario > 2 * tempoPadrao) {
        console.log('A comida queimou')
    } 
    else {
        console.log('Prato pronto, bom apetite')
    }

}


// Criando testes para verificar se está pegando todos os casos.

// console.log('========Testando Pipoca========')
// menu('Pipoca', 5)
// menu('Pipoca', 15)
// menu('Pipoca', 20)
// menu('Pipoca', 30)
// menu('Pipoca', 40)


// console.log('\n========Testando Macarrão========')
// menu('Macarrão', 4)
// menu('Macarrão', 12)
// menu('Macarrão', 16)
// menu('Macarrão', 24)
// menu('Macarrão', 25)


// console.log('\n========Testando Carne========')
// menu('Carne', 7)
// menu('Carne', 20)
// menu('Carne', 30)
// menu('Carne', 45)
// menu('Carne', 50)


// console.log('\n========Testando Feijão========')
// menu('Feijão', 6)
// menu('Feijão', 15)
// menu('Feijão', 24)
// menu('Feijão', 36)
// menu('Feijão', 50)


// console.log('\n========Testando Brigadeiro========')
// menu('Brigadeiro', 4)
// menu('Brigadeiro', 12)
// menu('Brigadeiro', 16)
// menu('Brigadeiro', 24)
// menu('Brigadeiro', 25)

// console.log('\n========Testando pratos diferentes das opções========')
// menu('Pizza', 10)
// menu('Hamburger', 10)
// menu('Feijoada', 10)




