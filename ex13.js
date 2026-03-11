var prompt = require('prompt-sync')();

let nota = +prompt('digite sua nota: ');
let falta = +prompt('digite suas faltas:');

if(nota >=7 && falta <5) {
    console.log('aprovado');
} else{
    console.log('reprovado')
}