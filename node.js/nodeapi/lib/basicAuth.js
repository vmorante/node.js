"use strict";
const basicAuth = require('basic-auth');


//este modulo exporta una funcion que recibe usuario y password
module.exports = (usuario, password) => {
    //la funcion devuelve un middleware de autenticacion
    return (req, res, next) => {
        //pedimos a basicAuth que intente sacar credenciales
        const user = basicAuth(req);
        console.log({ user });
        if (!user || user.name != usuario || user.pass !== password) {
            //si no tengo credenciales, respuesta con cabercera pidiendolas
            res.set('WWW-authenticate', 'Basic realm=Autorization Required');
            res.send(401);
            return;
        }
        next();
    }

}
