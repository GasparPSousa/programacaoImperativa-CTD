var nomeJogador = "Romário";
var golsJogador = 1000;
var precoEmDolares = 100000000;


function fazerGol() {
    //  Para melhorar a leitura na saída
    //console.log()
    // Incrementando 1 gol
    golsJogador++;
    // Imprimindo na tela a mensagem "GOL!!!!!!!!"
    console.log("GOL!!!!!!!!!");
    // Incrementando 10000 dólares
    precoEmDolares = precoEmDolares + 10000;
    // Imprimindo a mensagem na tela usando Templates Strings
    return console.log(`${nomeJogador} tem ${golsJogador} gols e vale $${precoEmDolares} dólares.`)
}


function hatTrick() {
    fazerGol()
    fazerGol()
    fazerGol()
    // Aumentando em 10% o valor do jogador
    precoEmDolares = 1.1 * precoEmDolares
    console.log()
    return precoEmDolares

}

console.log(hatTrick())