let notas = [9.3, 8.9, 8.5, 9.7, 7.8, 6.9]
console.log(Math.min(...notas))


function somar(...numeros) {
    // Os números agora são um array
    // O método reduce obtém a somatória
    return numeros.reduce((acumulador, num) => acumulador += num);
}

console.log(somar(1, 4))
console.log(somar(13, 6, 8, 12, 23, 37))


/* 

Como o parâmetro captura todos os argumentos restantes, ele deve ser sempre o último parâmetro da função, 
caso contrário, obteremos um erro.

*/