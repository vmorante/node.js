"use strict";

const EventEmitter = require('events');


const eventEmitter = new EventEmitter();


function suenaTelefono(quien) {
    if (quien === 'madre') {
        return;
    }
    console.log('ring ring');
};

function vibraTelefono() {
    console.log('brr brr');
};


eventEmitter.on('llamar telefono', suenaTelefono);

eventEmitter.on('llmarTelefono', vibraTelefono);

eventEmitter.emit('llamar telefono', 'madre');
