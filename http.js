//carga el modulo http
var http=require('http');
const{ brotliCompressSync } =require('zlib');

//request:peticion que llega desde el cliente (navegador)
//response:la respuesta que envío desde el server al cliente
http.createServer(function(request,response){
    response.write("Hola");//envia mensake al cliente
    response.end();
}).listen(8081);

console.log("servidor iniciado");
console.log("para terminar la ejecucion, presionar click");


//boton.addEventListener('click', function(e){
//e=datos del evento
//})