function novoLivro(nome, autor, paginas){
    let livro = {
        nomeLivro: nome,
        autorLivro: autor, 
        qntPaginas: paginas
    }

    return livro; 
}

let livro1 = novoLivro('teste', 'teste', 200);
let livro2 = novoLivro('teste2', 'teste2', 100);

livro1.cor = 'azul'; 

console.log(livro1);
console.log(livro2);