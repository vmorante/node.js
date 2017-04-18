"use strict";


const fs = require('fs');
const async = require('async')


//require usa una ruta relaticva a este fichero.js
const versionModulo = require('./versionModulo');


//esta ruta es relativa a la raiz del proyecto
function versionModulos(callback) {
    fs.readdir('./node_modules', function(err, lista) {
        if (err) {
            callback(err);
            return;
        }
        console.log(lista);
        //para cada string de la lista ejecutamos versionModulo
        //concat recibe un array, la funcion a ejectar con cada elemennto y un callback final
        async.concat(lista,
            //iterador
            function iterador(elemento, callbackIterador) {
                if (elemento === '.bin') {
                    callbackIterador(null);
                    return;
                }
                versionModulo(elemento, function(err, version) {
                    if (err) {
                        callbackIterador(err);
                        return;
                    }
                    //ya tenemos la version del modulo
                    callbackIterador(null, { version: version, modulo: elemento });
                    return;
                })
            },
            //finalizador
            //function finalizador(err, resultados) {
            //console.log('resultados', resultados)

            //})
            callback);
    });
}


versionModulos(function(err, datos) {
    if (err) {
        console.log('Hubo un error', err);
        return;
    }
    console.log('Los modulos son:', datos);
})
