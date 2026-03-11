var prompt = require('prompt-sync')();

let sair = prompt('digite sair para sair: ');

while(sair != 'sair'){
    console.log('erro');
    sair = prompt('digite sair para SAIR: ');
} 

console.log('saiu')