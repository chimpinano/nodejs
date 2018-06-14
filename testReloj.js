// importamos nuestro modulo
var Reloj = require("./reloj.js");
var segundos = 0;

// creamos un objeto de tipo reloj
var reloj = new Reloj();
// creamos un listener que escuche un evento
reloj.on("tick-tock", function(){
	segundos += 1;
	if(segundos == 5){
		process.exit();
	}
	console.log(segundos);
});

// como tenemos acceso a todo los metodos de eventemitter podemos usar Once
reloj.once("tick-tock", function() {
	console.log("Primera vez");
});