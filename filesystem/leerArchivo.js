var fs = require("fs");
//fs.readFile("archivos/ejemplo.txt", "UTF-8", function(error, contenido){
fs.readFile("archivos/ejemplo.txt", function(error, contenido){
    if(error){
        throw error;
    }
    else{
        console.log("Contenido: " + contenido);
    }
})