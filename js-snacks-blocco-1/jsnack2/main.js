// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while (edited) 

let som = 0;

for(let i= 0; i < 5; i++){
    const numero = parseInt( prompt('Inserisci un numero') );
    som += numero;
}

console.log(som);