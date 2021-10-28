// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt('inserisci una parola');
const parola2 = prompt('inserisci una parola');

if(parola1.length === parola2.length){
    console.log('le parole hanno la stessa lunghezza');
} else if(parola1.length < parola2.length){
    console.log(`${parola1} ${parola2}`);
} else {
    console.log(`${parola2} ${parola1}`);
}