/*console.log(process.argv);
const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(arg3);
console.log(base);*/
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs2');
//console.log(process.argv);
//console.log(argv);
//console.log('base:yargs', argv.base);
//const base = 7;
crearArchivo(argv.base, argv.hasta, argv.listar).then(retorno => console.log(retorno)).catch(error => console.log(error));