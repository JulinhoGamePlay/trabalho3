var prompt = require('prompt-sync')();

let semana = prompt('qual o dia da semana de hoje? :')

if (semana == 'domingo' || semana == 'sabado') {
    console.log('é fim de semna. ');
} else {
    console.log('chora, não é fim de semana.')
}

