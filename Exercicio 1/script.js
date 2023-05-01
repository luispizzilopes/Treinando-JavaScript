let data = prompt("Informe a data atual (dd/MM/yyyy):");

var meses = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"];

const lista = document.querySelector(".lista");
const listaMeses = document.querySelector(".lista-meses"); 

lista.innerHTML =  `<li class="dia">Dia: ${data.slice(0, 2)}</li>`; 
lista.innerHTML += `<li class="mes">Mês: ${meses[data.slice(3,5) - 1]}</li>`; 
lista.innerHTML += `<li class="ano" >Ano: ${data.slice(6,10)}</li>`; 

let comeco = data.slice(3,5) - 1; 
let contador = 0; 

for(i = comeco; i < 12; i++){ 
    if(i == comeco){
        listaMeses.innerHTML += `<li class="itens-primeiro">${meses[i]}</li>`;
    }else if(i % 2 != 0){
        listaMeses.innerHTML += `<li class="itens-par">${meses[i]}</li>`;
    }else if(i % 2 == 0){
        listaMeses.innerHTML += `<li class="itens-impar">${meses[i]}</li>`;
    }
    contador++;

    if(contador < 12 && i == 11){
        let diferenca = 12 - contador; 
        for(j = 0; j < diferenca; j++){
            if(j % 2 != 0){
                listaMeses.innerHTML += `<li class="itens-par">${meses[j]}</li>`;
            }else if(j % 2 == 0){
                listaMeses.innerHTML += `<li class="itens-impar">${meses[j]}</li>`;
            }
        }
    }
}