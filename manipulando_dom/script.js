var lista = ['maça', 'laranja', 'limão', 'perá', 'uva']; 

var listaUl = document.createElement("ul"); 

var body = document.querySelector('body'); 
console.log(body) 

body.append(listaUl)

var listaNoBody = document.getElementsByTagName('ul'); 

for(var i = 0; i<lista.length; i++){
    var li = document.createElement('li'); 
    var textoLi = document.createTextNode(lista[i]); 
    
    li.appendChild(textoLi); 

    listaNoBody[0].appendChild(li); 
}