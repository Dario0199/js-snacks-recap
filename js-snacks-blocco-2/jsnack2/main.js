// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
let numeroNome
let numeroCognome

const nomi = [
    'Giovanni',
    'Luca',
    'Francesco',
    'Federico',
    'Giuseppe'
]

const cognomi = [
    'Rossi',
    'Ferrari',
    'Conti',
    'Bianchi',
    'Rizzo'
]

let invitato1 
let invitato2 
let invitato3 


numeroNome = Math.floor(Math.random() *5)
numeroCognome = Math.floor(Math.random() *5)

invitato1 = nomi[numeroNome] + cognomi[numeroCognome];
invitato2 = nomi[numeroNome] + cognomi[numeroCognome];
invitato3 = nomi[numeroNome] + cognomi[numeroCognome]

console.log(invitato1, invitato2, invitato3) ;
