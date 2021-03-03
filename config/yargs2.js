const argv = require('yargs').option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).option('l', {
        /*alias: 'listar',
        type: 'boolean'*/
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Lista la tabla que se creara'
    }).option('h', {
        /*alias: 'listar',
        type: 'boolean'*/
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero hasta donde quieres la tabla'
    }).check((argv, opcions) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero"
        }
        if (isNaN(argv.h)) {
            throw "la base tiene que ser un numero"
        }
        return true;
        //console.log('yargs', argv);
    })
    .argv;

module.exports = argv;