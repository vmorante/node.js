"use strict";

const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

//le pedimos a mongoose el modelo de agente
const Usuario = mongoose.model('Usuario');
const jwt = require('jsonwebtoken')

const config = require('../../config');


router.post('/login', (req, res, next) => {
    //recibims credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    //buscamos el usrio en la bd
    Usuario.findOne({ email: email }).exec((err, usuario) => {
        if (err) {
            next(err);

            return;
        }

        if (!usuario) {
            res.json({ success: false, error: 'Credenciales incorrectas' });
            return;
        }

        //comprobamos su clave
        if (clave !== usuario.clave) {

            res.json({ success: false, error: 'Credenciales incorrectas' });
            return;

        }
        //creamis un token JWT

        jwt.sign({ usuario_id: usuario._id }, config.jwtSecret, config.jwtConfig,

            (err, token) => {
                if (err) {
                    next(err);
                    return;
                }

                //se lo devolvemos
                res.json({ success: true, token: token })


            });

    });
});
module.exports = router;
