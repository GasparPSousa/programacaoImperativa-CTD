// Objetos Literais

// Podemos dizer que objetos literais são representações em código de um elemento da vida real.


// Estrutura, propriedades e métodos.
// O objeto é uma estrutura de dados que pode conter propriedades e métodos.
// Para criá-los, usamos chaves de abertura e fechamento {}.


// Criando um objeto
let tenista = {

    // Definindo as propriedades
    nome: 'Novak',
    sobrenome: 'Djkovic',
    idade: 34,
    ativo: true,
    pais: 'Sérvia',

    // Definindo os métodos
    saudacao: function() {
        return `Olá, me chamo ${this.nome} ${this.sobrenome}! Tenho ${this.idade} anos.`
    }

}

console.log(tenista.nome)
console.log(tenista.sobrenome)
console.log(tenista.idade)
console.log(tenista.ativo)
console.log(tenista.saudacao())