var prompt = require('prompt-sync')();

let n = prompt('diga uma numero positivo: ');

while(n < 0){
    n = prompt('ERRO: DIGITE UM NUMERO POSITIVO!')
} 

console.log('boa! o numero digitado foi positivo')