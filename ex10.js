var prompt = require('prompt-sync')();

let idade = +prompt('digite sua idade:')

if(idade >= 18){
    let cnh = prompt('sor, você possui CNH? sim/nao: ');
    if(cnh=='sim') {
        console.log('\nentão me dá uma carona sor');
    } else{
        console.log('\nbahhh, de busão até eu né ')
    }
} else {
    console.log('\nque mentira')
}