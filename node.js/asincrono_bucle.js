"use strict;"



//hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log('texto' + texto);
        callback();
    }, 2000);
}

//funcion ayudante para bucle en serie
function serie(veces, fn, callback) {
    if (veces === 0) {
        callback();
        return;
    }
    veces--;
    fn(veces, function() {
        serie(veces, fn, callback);
    });
}


serie(5, escribeTras2Segundos, function() {
    console.log('fin');
});
