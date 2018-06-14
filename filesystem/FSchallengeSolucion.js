var fs = require("fs");

//crear los 3 folders nuevos
fs.mkdir("Nivel1");
fs.mkdir("Nivel2");
fs.mkdir("Nivel3");

//Vamos a leer los archivos de folder 'temp'
try{
    var archivos = fs.readdirSync("temp");
}
catch(error){
    throw error;
}

//para cada uno de los archivos revisar si el nombre tiene
//_1, _2 o _3 para mover el archivo al folder correspondiente
archivos.forEach(function(nombreArchivo){
    if(nombreArchivo == '.DS_Store'){
        //borrar el archivo.
        fs.unlinkSync("temp/" + nombreArchivo);
    }
    if(nombreArchivo.indexOf("_1") !== -1){
        moverArchivo("Nivel1", nombreArchivo);
    }
    else if(nombreArchivo.indexOf("_2") !== -1){
        moverArchivo("Nivel2", nombreArchivo);
    }
    else if(nombreArchivo.indexOf("_3") !== -1){
        moverArchivo("Nivel3", nombreArchivo);
    }
})

//borrar el directorio
fs.rmdir("temp", function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El folder 'temp' fue borrado.");
    }
})

//Esta function mueve el archivo con nombre "nombreArchivo" a la carpeta
//"nivel"
function moverArchivo(nivel, nombreArchivo){
    fs.rename("temp/" + nombreArchivo, nivel + "/" + nombreArchivo, function(error){
                    if(error){
                        throw error;
                    }
                    else{
                        console.log("El archivo " + nombreArchivo + " fue movido al folder " + nivel);
                    }
                })
}