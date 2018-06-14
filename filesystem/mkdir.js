var fs = require("fs");

// access Nos permite saber si podemos accerder a una carpeta o aun archivo
fs.access("test2", function(error){
    // si ocurrio 1 error quiere decir que la carpeta no existe
    if(error){
        fs.mkdir("test2", function(error){
            if(error){
                throw error;
            }
            else{
                console.log("La carpeta fue creada.");
            }
        })
    }
    else{
        console.log("La carpeta ya existe.");
    }
})
