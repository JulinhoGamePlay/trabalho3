var prompt = require('prompt-sync')();

let i = 1;
let numero = +prompt('digita um numero para contar do 1 até ele: ')

if (numero > 0) {
    while (i <= numero ) {
        console.log(i)
        i++;
    }
} else if (numero < 0) {
    while (i >= numero) {
        console.log(i)
        i--;
    }
} else {
    console.log('o numero escolhido foi 0')
}

console.log('fim do loop');
