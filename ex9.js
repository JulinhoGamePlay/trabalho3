var prompt = require('prompt-sync')();

let idade = +prompt('digite sua idade prof: ');

if(idade >= 18){
    console.log('você é maior de idade, mas nós dois já sabemos disso.');
} else { 
    console.log('você é menor de idade, mas sabemos que é mentira. ')
}