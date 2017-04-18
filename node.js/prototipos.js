"use strict";


function Persona(nombre) {
    this.nombre = nombre;

}


const persona = new Persona('Neo');

//asignamos un metodo al prototipo de todas las personas
Persona.prototype.saluda = function() {
    console.log('Hola me llamo', this.nombre);
};

persona.saluda();

//------HERENCIA
function Agente(nombre) {
    Persona.call(this, nombre);
    //Esto ejecuta el constructor de persona con el this de agente
    //Esto es como llamar a super del constructor de su padre

}

//Asignamos como prototypo una persona
Agente.prototype = new Persona('soy un prototipo')

const agente = new Agente('Smith');

agente.saluda();

//------HERENCIA MULTIPLE
//

function Superheroe() {
    this.vuela = function() {
        console.log(this.nombre, 'vuela');
    };

    this.esquivaBalas = function() {
        console.log(this.nombre, 'esquiva Balas');
    };
}

//Asignar todas las propiedades( y metodos) de un superheroe al prototipo de agente
//
Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();
