var fs = require("fs");

/*var archivos = fs.readdirSync("archivos");
console.log(archivos);*/

// El directorio que queremos leer se llama archivos
fs.readdir("archivos", function(error, archivos){
    if(error){
        throw error;
    }
    else{
        console.log(archivos);
    }
})

console.log("Leyendo los archivos del directorio");