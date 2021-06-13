let somar = (n1, n2) => n1 + n2;

let subtrair = (n1, n2) => n1 -n2;


let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2);

console.log(operacaoMatematica(3, 4, somar))