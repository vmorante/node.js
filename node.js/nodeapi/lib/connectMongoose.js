"use strict";


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('err', (err) => {
    console.log('Erro de conexion', err);
    process.exit(1);
});


conn.once('open', () => {
    console.log('Conectado a mongodb');
})

//realizamos la conexion
mongoose.connect('mongodb://localhost/cursonode');


//no necesitamos exportar la conexion ya que
// mongoose la gestiona por nosostros
