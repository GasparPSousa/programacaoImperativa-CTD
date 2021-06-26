// Callbacks

// Uma callback é uma função que é passada como parâmetro para outra função.
// A função que recebe é responsável por executá-la quando necessário.

// função que será passada como callback
let minhaCallback = () => console.log('Hello World!');

// Solicitando para executar minha callback em 5s
setTimeout(minhaCallback, 5000); 

// uma função qualquer para testar a ordem de execução no Node
let arrowMultiplicar = (a, b) => a * b ;
console.log(arrowMultiplicar(6, 55))

// função que será passada como callback
let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}!`

// função que recebe o callback e executa o callback quando invocada
let bomDia = (nome, sobrenome, callback) => `Olá, ${callback(nome, sobrenome)}`

console.log(bomDia('Gaspar', 'Sousa', nomeCompleto))



// OBS:
// Embora a função bomDia() esteja depois da função setTimeout(), a funçao bomDia() foi executada primeiro.
// Pois o Node não espera a primeira função terminar de executar, para depois executar a próxima.
// Enquanto uma função está executando, ele já começa executar a outra.