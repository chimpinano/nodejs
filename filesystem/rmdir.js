var fs = require("fs");

fs.rmdir("test", function(error){
    if(error){
        throw error;
    }
    else{
        console.log("El directorio fue borrado.");
    }
})