var prompt = require('prompt-sync')();

let n1 = +prompt('digite um numero:');
let n2 = +prompt('digite outro numero:');
let n3 = +prompt('digite mais um numero:');

let media = (n1+n2+n3)/3;

console.log(media);
