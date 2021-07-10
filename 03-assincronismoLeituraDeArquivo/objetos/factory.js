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