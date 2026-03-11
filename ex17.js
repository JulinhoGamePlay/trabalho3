var prompt = require('prompt-sync')();

let idade = +prompt('qual sua idade? ');

if( idade <=14 ) {
    console.log('criança. ');
} else if (idade <18){
    console.log('adolecente. ');
} else if (idade <60){
    console.log('adulto. ')
} else{
    console.log('idoso.')
}