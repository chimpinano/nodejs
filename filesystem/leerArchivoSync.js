var fs = require("fs");

// para cuando queramos asegurarnos de cargar todo el archivo previamente, como un archivo 
// de configuracion por ejemplo en donde debemos ver en su totalidad como esta configurado
// para hacer eso lo hacemos via sincronicamente
var contenido = fs.readFileSync("archivos/config.json", "UTF-8");

console.log(contenido);

var config = JSON.parse(contenido);
console.log(config.nombre_usuario);