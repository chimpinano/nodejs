/*
setTimeout
setInterval

*/
var tId = setTimeout(function() {
    console.log("Ejecutando la función dentro de setTimeout");
}, 1000);

//console.log(tId);
clearTimeout(tId);

var valor = 0;
var sId = setInterval(function(){
    valor += 1;
    console.log(valor);
    
    if(valor == 5){
        clearInterval(sId);
    }
}, 1000);
