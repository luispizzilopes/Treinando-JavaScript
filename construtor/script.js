function criarCarro(nome,modelo,ano,cor){
    this.nome = nome; 
    this.modelo = modelo;
    this.ano = ano; 
    this.cor = cor;
}

let carro1 = new criarCarro('fusca', ' fusca 1970', 1970, 'azul')
let carro2 = new criarCarro('fusca', ' fusca 1970', 1970, 'preto')

console.log(carro1); 
console.log(carro2); 