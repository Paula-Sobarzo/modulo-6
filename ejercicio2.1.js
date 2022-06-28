//paso 1: construir el server
//paso 2: analizar la ruta,y dependiendo del resultado enviar 
//la ruta debe ser del estilo: 127.0.0.1.8090/datos, si viene 
//paso 3: cargar el archivo qe corresponda, y enviar el contenido

var http = require('http');
var url  = require('url');
var fs   = require('fs');

http.createServer(function (request, response) {
    let q=url.parse(request.url,true);
    if(q.pathname=="/datos"){
        //ok  --está hecho de manera sincrona 
        /* response.writeHead(200, {'Content-Type': 'text/html'});
        let= datos=fs.readFileSync('pagina1.html');
        response .write(datos.toString());
        response.end();*/
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('pagina1.html', function(err,data){
            if(err){
                console.log(err.message)
            }else{
                response.write(data.toString());
            }
            response.end();
        })     
    }else{
        //error  está hecho de manera asincrona
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile('pagina2.html', function(err,data){
            if(err){
                console.log(err.message)
            }else{
                //console.log(data.toString())
                response.write(data.toString());
            }
            response.end();
        })     
    }

}).listen(8090);

console.log('Servidor escuchando peticiones en el puerto 8090');

