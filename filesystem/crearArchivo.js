var fs = require("fs");// solicitar el modulo file system

var texto = "Aprende Node.js Fácilmente";

fs.writeFile("archivo", texto, function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El archivo fue creado");
    }
})

var nuevoTexto = "\nCurso por Jonathan Cifuentes";

fs.appendFile("archivo", nuevoTexto, function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El nuevo texto a sido añadido al archivo.");
    }
})