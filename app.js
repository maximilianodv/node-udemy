//requireds
//const fs = require('fs');

//const fs = require('express');
//const fs = require('./fs');
//const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla, listarCrear } = require('./multiplicar/multiplicar');
const colors = require('colors');

const argv = require('./config/yargs').argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar222');
        listarTabla(argv.base, argv.limite).then(lista => console.log(lista)).catch((e) => { console.log(e) });
        break;

    case 'crear':
        crearArchivo(argv.base).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch((e) => { console.log(e) });
        break;

    case 'crearlistar':
        listarCrear(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch((e) => { console.log(e) });
        break;
    default:
        console.log('comando no reconocido');
}
//let base = '5';
//console.log(process.argv);
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
console.log('Limite', argv.limite);
console.log('base', argv.base);

//console.log(argv2);
//console.log(module);
/*for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i}=${ base * i }\n`;
}

//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido creado`);
});
*/
//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch((e) => { console.log(e) });
/*

*/