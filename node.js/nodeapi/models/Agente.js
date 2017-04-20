"use strict";

const mongoose = require('mongoose');

//creamos un esquema
//
const agenteSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        index: true
    }
});

//creamos metodo estatico en el modelo
//para recuperar lista de agentes con filtros
agenteSchema.statics.list = function(callback) {
    Agente.find().exec(callback);
}




//creamos el modelo de agente
var Agente = mongoose.model('Agente', agenteSchema);

//no necesitamos exportar el modelo porque 
//podemos recuperarlo donde queramos con mongoose.model('Agente')
