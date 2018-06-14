/*console.log("hola");
setTimeout( function cb(){
	console.log("Tiempo!");
}, 5000);
console.log("adios");*/

//var conversion = require("./conversion");
var conversion = require("conversion");

var pulgadas = 3;
console.log(pulgadas + " pulgadas son " + 
	conversion.pulgadasaMetros(pulgadas) + " metros.");

var millas = 5;
console.log(millas + " millasas son " + 
	conversion.pulgadasaMetros(millas) + " metros.");

