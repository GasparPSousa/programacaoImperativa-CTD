// Closures

// São funções aninhadas, ou seja, funções que vivem dentro de outras funções.

// Uma closure tem acesso a TODOS os PARÂMETROS e VARIÁVEIS que a função pai 
// está recebendo ou declarando sem ter que passá-los como parâmetro.

// Se busca otimizar o desempenho dos nossos scripts.

function saudacaoPersonalizada(nome) {
    
    let saudacaoGenerica = 'Olá'
    // A função filha é reponsável por fazer as coisas esperadas.
    function saudar() {
        return `${saudacaoGenerica} ${nome}, tudo bem com vc!?`
    }
    // Mas é a função pai que é reponsável por retornar e chamar a função filha.
    // Ou seja, a função pai está retornando a execução filha.
    return saudar()
}

console.log(saudacaoPersonalizada('Gaspar'))
