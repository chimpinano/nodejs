// la funcion watchFile es muy util cuando queremos ver cambios en archivo
//D:\devNodejs\nodejs>node filesystem/watchFile.js
var fs =require("fs");
// la codificacion es UTF-8
var config = JSON.parse(fs.readFileSync("archivos/config.json", "UTF-8"));
console.log(config);

fs.watchFile("archivos/config.json", function(actual, anterior){
    console.log("El archivo cambió");
    console.log("La fecha de modificación cambió de " + anterior.mtime + " a " + actual.mtime);
    config = JSON.parse(fs.readFileSync("archivos/config.json", "UTF-8"));
    console.log(config);
})