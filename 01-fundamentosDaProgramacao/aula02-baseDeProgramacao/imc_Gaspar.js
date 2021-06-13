const clientes = [
{
    nome : "José",
    sobrenome : "da Silva",
    idade : 27,
    peso : 83.5,
    altura : 1.70,
    plano : true
},
{
    nome : "Carlos",
    sobrenome : "de Souza",
    idade : 28,
    peso : 80.1,
    altura : 1.76,
    plano : true
},
{
    nome : "Aline",
    sobrenome : "Ferreira",
    idade : 33,
    peso : 63.7,
    altura : 1.53,
    plano : false
},
{
    nome : "Ana",
    sobrenome : "Paula",
    idade : 26,
    peso : 55.0,
    altura : 1.62,
    plano : true
}
]

for(let i = 0; i < clientes.length; i++) {
    let imc = clientes[i].peso / (clientes[i].altura * clientes[i].altura)
    imcDecimal = Math.round(imc * 10) / 10
    console.log(`"${clientes[i].nome} ${clientes[i].sobrenome} tem ${clientes[i].idade} anos e seu índice de massa corporal é ${imcDecimal}".`)
}


