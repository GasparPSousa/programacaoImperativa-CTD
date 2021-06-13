// Terceirizando funções

/*
Micro Desafios

Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
Após isso, crie duas funções: 
andar() – deve exibir uma mensagem dizendo que o carro está andando – e 
parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

*/


const acaoCarro = (callbacks) => callbacks();

const andar = () => console.log('O carro está andando');

const parar = () => console.log('O carro parou');

acaoCarro(andar)
acaoCarro(parar)
