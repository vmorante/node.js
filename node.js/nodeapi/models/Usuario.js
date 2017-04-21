"use strict";

const mongoose = require('mongoose');

//creamos un esquema
//
const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    clave: String
});

mongoose.model('Usuario', usuarioSchema);
