/** find()
 
    Retorna o PRIMEIRO VALOR que cumprir a condição especificada na CALLBACK.
    A callback irá retornar true ou false, e receberá três parâmetros:

    Elemento: elemento atual do array.
    Indice: Opcional – posição atual do elemento.
    Array: array que está sendo percorrido.
    
 */



let moedas = [
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Ethereum', simbolo: 'ETH'},
    {nome: 'Cardano', simbolo: 'ADA'},
];

let moeda = moedas.find(
    function(moeda) {
        return moeda.nome === 'Bitcoin';
    }

);
console.log(moeda)


moeda = moedas.find(
    function(moeda) {
        return moeda.simbolo === 'ADA';
    }

);
console.log(moeda)

