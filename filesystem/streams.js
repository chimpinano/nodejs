var fs = require("fs");

/*fs.readFile("archivos/grande.txt", "UTF-8", function(error, contenido){
    console.log("El tamaño del archivo es: " + contenido.length);
})*/

// un stream(de lectura) es un flujo de informacion o de datos
// se usa para leer archivos muy pesados para que nos de la info en pedazos
// el ejemplo se puede hacer con un archivo que pesa 23 Megas por ejemplo
var stream = fs.createReadStream("archivos/grande.txt","UTF-8");

/*
var total = "";
stream.on("data", function(segmento){
    console.log(segmento.length);
    total += segmento;
    // strem.pause(); // hacer una pausa
    // strem.resume(); // para continuar
});
console.log("El tamaño total del archivo leido es: " + total.length);
*/
var data = "";

stream.on("data", function(seccion){
    process.stdout.write("\nSeccion: " + seccion.length);
});

stream.on("end", function(){
    console.log("\nTodo el archivo ha sido leido.");
})