//D:\devNodejs\nodejs>node filesystem/unlink.js
var fs = require("fs");

// (para borrado de archivo o folder)el metodo a usar sera unlink, el segundo parametro es 1 funcion callback
fs.unlink("test/test.txt", function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El archivo fue borrado");
    }
})