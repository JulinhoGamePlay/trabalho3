var prompt = require('prompt-sync')();

let pagamento = prompt('sua forma de pagamento vai ser dinheiro, cartão ou pix?  ');

if (pagamento == 'dinheiro' || pagamento == 'pix') {
    console.log('voce tem 10% de desconto!');
} else {
    console.log('ok')
}