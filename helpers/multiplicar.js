const { errorMonitor } = require('events');
const fs = require('fs')
require('colors')

const CrearArchivo = async(base = 5, listar = false, hasta) => {

    try {
        console.log('\n');
        console.log("Tabla del".blue,base)
        
        let salida = '';
        let consola = ''

        for (let index = 0; index <= hasta; index++) {
            salida += " "+base  +" x "+ index +" = "+index*base+"\n"
            consola += " "+base  +" x ".red+ index +" = ".red+index*base+"\n"
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        if(listar){
            console.log("=============".green)
            console.log("=============".green)
            console.log(consola)
            console.log("=============".green)
            console.log("=============".green)
        }

        return `tabla - ${base}.txt`;
        
    } catch (error) {
        throw error;
    }
}
    
module.exports = { 
    CrearArchivo: CrearArchivo
}