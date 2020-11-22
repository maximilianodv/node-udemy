const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 1
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crearlistar', 'imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}