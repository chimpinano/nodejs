console.log(process.argv);

function leerOption(option){
	var index = process.argv.indexOf(option);
	if(index === -1){
		return false;
	} else {
		return process.argv[index + 1];
	}
}

var name = leerOption("-nombre");
console.log("El nombre es: " + name);

/*process.stdout.write("Cual es el apellido: \n");
process.stdin.on("data", function(data){
	process.stdout.write(`El nombre completo es ${name} ${data} \n`);
	process.exit();
});*/

process.stdout.write("Escriba una lsita de numeros para sumar. '.' para terminar:\n");

var suma = 0;
process.stdin.on("data", function(data){
	if(data.toString().trim() == '.'){
		process.exit();
	} else {
		suma += parseInt(data.toString().trim());
	}
});

process.on("exit", function(){
	process.stdout.write("La suma total es; " + suma + "\n");
});

