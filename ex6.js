var prompt = require('prompt-sync')();

let produto = +prompt('digite o preço do produto: ');
let desconto = produto * (produto / 100);
//let desconto = produto*0.10

console.log (desconto);