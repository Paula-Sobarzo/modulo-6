//cargar las librerias que necesitamos( las que estan gaudadas dentro de http y luego las cargamos en una variable)
//
var http = require('http');
var url  = require('url'); //esta libreia url nos trae funcionalidades
var fs   = require('fs');

http.createServer(function (request, response) {  //request=peticion del servidor y es siempre los datos que se nos envían en la url y el response la respuesta que recibimos de la peticion
  //separar la url
  var urlSeparada=url.parse(request.url,true);
  //la variable urlSeparada consta ahora de varias partes.
  //host:la parte de la dirección (localhost:8091)
  //pathname: la parte entre los slash (/):/usuario.
  //query:la paerte de los parametros (?rut=123&nombre ....), vienen separados

  if(urlSeparada.pathname=="/usuario"){ //ok
    let datos={
        rut:urlSeparada.query.rut,
        nombre:urlSeparada.query.nombre,
        apellido:urlSeparada.query.apellido
    }
    //---------ARCHIVO --------------------------
    fs.writeFile("usuarios/"+datos.rut+".txt",JSON.stringify(datos),function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log("archivo creado correctamente");
        }
    })//ESNUNEVENTO POR ENDE NECESITA 3 PARAMTEROS, EL PRIEMRO ES LA RUTA


    //-------RESPUESTA----------------------------
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(datos));
    response.end();
  }else{  //error
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end();
  }
    
}).listen(8091);

console.log('Servidor escuchnado en el puerto 8091');