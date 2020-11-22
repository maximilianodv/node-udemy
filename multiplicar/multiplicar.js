const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`===========tabla de ${ base}`.red);
    console.log('======================'.green);
    return new Promise((resolve, reject) => {
        let dataconsol = '';
        for (let i = 1; i <= limite; i++) {
            dataconsol += `${base} * ${i}=${ base * i }\n`;
        }
        if (!Number(limite)) {
            reject(`el valor introducido ${limite} no es un numero`);
            return;
        }
        resolve(dataconsol);
    });


}
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i}=${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`El archivo tabla-${base} ha sido creado`);
        });

    });
}
let listarCrear = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        let datalc = '';
        for (let i = 1; i <= limite; i++) {
            datalc += `${base} * ${i}=${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base}.txt`, datalc, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`El archivo tabla-${base} ha sido creado`);
                console.log(datalc);
                resolve(`tabla-${base}.txt`.green);
            }
        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla,
    listarCrear
}