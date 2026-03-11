var prompt = require('prompt-sync')();

let i = 1; // de onde deve começar a contagem
let numero = +prompt('digita um numero para contar do 1 até ele: ') //pedir até onde o usuario quer que vá a contagem

if (numero > 0) { //verificar se o numero escolhido pelo usuario é positivo
    while (i <= numero ) { //fazer enquanto o i(1) for menor que o numero escolhido pelo usuario
        console.log(i) //mostrar o valor atual de i
        i++; //aumentar em 1 o valor de i
    }
} else if (numero < 0) { //verificar se o numero escolhido pelo usuario é negativo
    while (i >= numero) { //fazer enquanto o i(1) for maior que o numero escolhido pelo usuario
        console.log(i) //mostrar o valor atual de i
        i--; //diminuir em 1 o valor de i
    }
} else {
    console.log('o numero escolhido foi 0/') //apenas mostrar essa mensagem caso o valor escolhido seja 0
}

console.log('fim do loop'); //mensagem quando acabar as contagens
