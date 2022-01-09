const { describe } = require('yargs');

const argv = require('yargs')
                        .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es para el numero de la base'
                        })
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: true,
                            default: false,
                            describe: 'Muestra la tabla de multiplciar en consola'
                            })
                        .option('h',{
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'Número hasta el que quieres llegar'
                                })        
                        .check((argv,option) => {
                            if(isNaN( argv.b)){
                                throw 'La base tiene que ser un numero';
                            }
                            return true
                        })
                    .argv;

module.exports = argv;