var prompt = require('prompt-sync')();

let idade = +prompt('qual sua idade? ')
let cnh = true;

if (idade >= 18 && cnh == true) {
    console.log('pode dirigir');
    
} else {
    console.log('nao pode dirigir')
}