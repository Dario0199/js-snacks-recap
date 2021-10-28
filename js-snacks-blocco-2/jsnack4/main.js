const gruppo1 = [1, 2, 3, 4, 5, 6]
const gruppo2 = [1, 2, 3, 4]


while (gruppo1.length !== gruppo2.lenght){
    
    if (gruppo2.length < gruppo1.length){
         gruppo2.push('1');
    } else {
        gruppo1.push('1');
    }    
}

console.log(gruppo1.length, gruppo2.length);