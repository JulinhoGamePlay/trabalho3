var prompt = require('prompt-sync')();

let usuario = prompt('digite seu usuario: ');
let senha = prompt('digite sua senha: ');

while(usuario != 'admin' && senha != '1234'){
    console.log('erro');
    usuario = prompt('digite seu usuario: ');
    senha = prompt('digite sua senha: ');
} 

console.log('login ok')