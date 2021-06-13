function saudacao(nome) {
    let mensagem = "Olá! Seja bem vindo(a)";

    function juntarNome() {
        return `${mensagem}, ${nome}!`;
    }

    return juntarNome();
}

console.log(saudacao("Gaspar"))
console.log(saudacao("Maria Cristina"))