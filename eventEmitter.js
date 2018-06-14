var events = require("events");
var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.once("cansado", function(data){
	console.log("El jugador esta cansado por primera vez");
});

ee.on("cansado", function(data){
	console.log("El jugador esta cansado. El juegador es el número" + data);
});

ee.on("herido", function(data){
	console.log("El jugador esta herido");
});

ee.emit("cansado", "101");
ee.emit("cansado", "102");

ee.removeAllListeners("cansado"); //solo se veran 101 y 102
//ee.removeAllListeners(); //solo se veran 101 y 102

ee.emit("cansado", "103");
ee.emit("herido", "104");


