/* Formas de criar objetos sem usar função construtora*/

/*  1º - Usando Classes */
class Cat {
   constructor (name) {
    this.name = name
   }
   
   getName () {
       return this.name
   }
}

const myCat = new Cat('ThunderCat')
console.log(myCat.getName())

/* 2º - Usando Factory Functions */

const createCat = name => ({
    name,
    getName: () => name
})

const myCat2 = createCat('ThunderCat')
console.log(myCat2.getName())


/* Novo exemplo de Factory Functions */
function criarObjeto() {
    let objeto  = {}
    return objeto;
}

console.log(criarObjeto())


pessoaA = criarObjeto()
pessoaB = criarObjeto()

console.log(pessoaA)
console.log(pessoaB)

pessoaA.nome = 'Gaspar'
pessoaB.nome = 'Cristina'

console.log(pessoaA)
console.log(pessoaB)

function fabricarPessoa(nome, sobrenome) {
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    return pessoa;
}

pessoaA = fabricarPessoa('Gaspar', 'Sousa')
pessoaB = fabricarPessoa('Cristina', 'Salles')

console.log(pessoaA)
console.log(pessoaB)

console.log(pessoaA.nome)
console.log(pessoaB.sobrenome)