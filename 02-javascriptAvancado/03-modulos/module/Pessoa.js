class Pessoa {

  constructor(nome) {
      if (nome === undefined || nome.length <= 0) {
          throw new Error("O nome é obrigatório para uma Pessoa");
      }
      this.nome = nome;
  }

  apresentar() {
      console.log(`Olá, meu nome é ${this.nome}`);
  }

}



export default Pessoa