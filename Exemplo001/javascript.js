function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Adicionando um método ao prototype da função construtora Pessoa
Pessoa.prototype.obterDetalhes = function() {
    return this.nome + ', ' + this.idade + ' anos';
};

// Criando uma instância de Pessoa
var pessoa1 = new Pessoa('João', 30);

// Chamando o método definido no prototype
console.log(pessoa1.obterDetalhes()); //Saída: João, 30 anos