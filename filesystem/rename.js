//D:\devNodejs\nodejs>node filesystem/rename.js
var fs = require("fs");

// fs.rename("archivos/renombar.txt", "renombrar.txt", function(error){ si lo hacemos de esta 
// forma se renombra pero x fuera de esta carpeta que seria dentro de la carpeta nodejs
fs.rename("archivos/renombar.txt", "archivos/renombrar.txt", function(error){
    if(error){
        throw error;
    }
    else{
        //console.log("El nombre del directorio fue cambiado");
        console.log("El archivo fue renombrado");
    }
})