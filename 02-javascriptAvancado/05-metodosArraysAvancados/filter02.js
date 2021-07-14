/* 
    - filter()

    Quando usar o filter?

    Baseado em uma CONDIÇÃO, você quer obter um NOVO array com SÓ ALGUNS ITENS do Array Original.

    Como o map também recebe 3 parâmetros:
    item, index, array, mas só o item é obrigatório.

*/

// 1º Exemplo
 const randomNumber = [36, 99, 37, 63] 

 const numberGreaterThan37 = randomNumber.filter(item => item > 37)

 console.log(numberGreaterThan37)



 // 2º Exemplo
 const tarantinoMovies = [
     {name: 'Bastardos Inglórios', release: 2009},
     {name: 'Pulp Function', release: 1994},
     {name: 'Kill Bill: Volume 2', release: 2004},
     {name: 'Quatro Quartos', release: 1995},
     {name: 'Sin City', release: 2005},
     {name: 'Era uma vez em...Hollywood', release: 2019},
     {name: 'Django Livre', release: 2012},
     {name: 'Cães de Aluguel', release: 1992},
     {name: 'À Prova de Morte', release: 2007},
     {name: 'Kill Bill: Volume 1', release: 2003},
 ]


 const moviesBefore2000 = tarantinoMovies.filter(({ release }) =>  release < 2000)
 console.log(moviesBefore2000)
 console.table(moviesBefore2000)




// 3º Exemplo
 const firstTravelerCities = [
     'Sydney',
     'Berlim',
     'Lisboa',
     'Sófia',
     'Praga',
     'Bali',
     'Florianópolis'
 ]


 const secondTravelerCities = ['Praga', 'Roma', 'Chiang Mai', 'Lisboa', 'Zagreb']

 const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city))
 console.log(commonCities)


 

 // Exemplo de uso do Includes()
 console.log(['oi', 'olá', 'e aí'].includes('oi'))