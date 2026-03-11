var prompt = require('prompt-sync')();

let temperatura = +prompt('qual a temperatura? ');

if( temperatura <15 ) {
    console.log('frio ');
} else if (temperatura <=25){
    console.log('agradavel ');
} else{
    console.log('quente.')
}