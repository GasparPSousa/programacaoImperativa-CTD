let somar = (n1, n2) => n1 + n2;

let subtrair = (n1, n2) => n1 -n2;


let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2);

// Passando a função somar() como callback
console.log(operacaoMatematica(3, 4, somar))


// Não precisa ser uma função criada, eu posso criar a função diretamente no local do parâmetro usando o conceito de função anônima
console.log(operacaoMatematica(3, 4, (n1, n2) => n1 * n2 ))



// O JavaScript trabalha com Callbacks e é uma forma muito utilizada no dia-a-dia.