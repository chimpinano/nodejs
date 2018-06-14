var EventEmitter = require("events").EventEmitter;
var util = require("util");

// Creamos 1 clase q se llama Reloj para emitir un evento que se llama tick-tock cada segundo
var Reloj = function(){
	var self = this; // se crea una referencia a nuestro objeto
	setInterval(function(){
		self.emit("tick-tock");
	}, 1000);
}

/*class Reloj extends EventEmitter {
	var self = this; // se crea una referencia a nuestro objeto
	setInterval(function(){
		self.emit("tick-tock");
	}, 1000);
}*/

//El parametro Reloj es la clase q va heredar la funcionalidad, y EventEmitter es la clase de la cual se va a heredar la funcionalidad
util.inherits(Reloj, EventEmitter);
// exportamos nuestro modulo
module.exports = Reloj;

