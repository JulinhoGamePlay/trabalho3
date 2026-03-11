var prompt = require('prompt-sync')();

let nota = +prompt('digite sua nota: ');

if( nota >=9 ) {
    console.log('exelente. ');
} else if (nota >=7){
    console.log('bom. ');
} else if (nota >=5){
    console.log('regular. ')
} else{
    console.log('se ferrou')
}