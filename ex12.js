var prompt = require('prompt-sync')();

let usuario = prompt('digite seu usuario: ');
let senha = prompt('digite sua senha: ');

if(usuario == 'admin' && senha == '1234'){
    console.log('loguin ok');
} else {
    console.log('erro')
}