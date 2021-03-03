const fs = require('fs');
const colores = require('colors');
const crearArchivo = async(base = 5, hasta = 10, listar = false) => {
        let salida, consola = '';

        try {
            for (let i = 1; i <= hasta; i++) {

                salida += `${ base } ` + ` x ` + `${i}` + ` = ${ base *i }\n`;
                consola += `${ base } `.green + ` x `.cyan + `${i}`.underline.red + ` = ${ base *i }\n`;
            }

            fs.writeFile(`salidas/tabla-${base}.txt`, salida, (err) => {

                return 'eror';
            })
            if (listar) {
                console.log(salida);
            }
            return `tabla-${base}.txt creado`;

        } catch (error) {
            throw error;
        }


    }
    /*const crearArchivo = (base = 5) => {
        let salida = '';

        return promesa = new Promise((resolve, reject) => {

            for (let i = 1; i <= 10; i++) {
                salida += `${ base } x ${ i } = ${ base + 1 }\n`;
            }

            fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
                if (err) {
                    reject(`error`);
                } else {

                    resolve(`tabla-${base}.txt creado`);
                }

            })


        });
    }*/
module.exports = {
    crearArchivo: crearArchivo
}