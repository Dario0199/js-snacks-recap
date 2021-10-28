// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente. Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

const btn = document.querySelector('.btn')

btn.addEventListener ('click', function(){
    let somma = 0;
    let media = 0,

    numero = prompt('Inserisci un numero a 4 cifre');
    console.log(numero);

    while(numero.length !== 4 || isNaN(numero)){
        const numero = prompt('Inserisci un numero a 4 cifre');
    }

    for(let i = 0; i < numero.length; i++){
        somma += parseInt(numero[i]);
    }
    media = somma / numero.length

    console.log(somma, media);
});