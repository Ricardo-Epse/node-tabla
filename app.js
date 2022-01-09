const {CrearArchivo} = require('./helpers/multiplicar');
console.clear();

const argv = require('./config/yargs')

console.log(argv)

console.log('base: yargs', argv.base)

//const base = 5

CrearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log("Error"))