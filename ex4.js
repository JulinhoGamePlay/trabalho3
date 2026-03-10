var prompt = require('prompt-sync')();

let idade = +prompt('qual sua idade? ');
let nome = prompt('qual o seu nome? ');

console.log(nome +' você tem ' +idade +' anos');
