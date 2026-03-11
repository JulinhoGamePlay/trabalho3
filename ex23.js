var prompt = require('prompt-sync')();

console.log('\n1 - um\n2 - dois\n0 - sair ')
let opcao = prompt('escolha uma das opções: ');

while(opcao != 0) {
    console.log('\notima escolha')
    opcao = prompt('ditie outro numero: ')
} 

console.log('\ntchau')