//paso 1.- crear el servidor
//paso 2.-verificar el request ( en este caso, la ruta comida y el parametro nombre)





var http = require('http');
var url  =require('url');
var nodemailer = require('nodemailer');

var alimentos="";

//configuración del correo
var transporter=nodemailer.createTransport({
    service :'gmail',
    auth :{
        user:'pasobarzo45@gmail.com',
        pass:'xqdszykzkzcnvxnp'
    }
});


http.createServer(function (request, response) {
    let q=url.parse(request.url,true);//url separada
    //comprobar que la ruta sea "comida" o "fin"
    if(q.pathname=="/comida"){
        //comprbar que exista un solo parametro y sea "nombre"
        //console.table(q.query);
        //console.table(Object.keys(q.search));
        if(Object.keys(q.query).length!=1){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Ruta no encontrada 1"); 
        }else if(Object.keys(q.query)[0]!="nombre"){
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("Ruta no encontrada 2");  
        }else{
            alimentos+=q.query.nombre+";"
            console.log("alimentos:" + alimentos);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.write("OK!");
        }
    }else if(q.pathname=="/fin"){
        //generar contenido del correo
        var correo = {
            to:"pasobarzo45@gmail.com",
            from:"curso@node.cl",
            subject:"lista de ingredientes!",
            text: alimentos
        }
        //enviar correo
        transporter.sendMail(correo,function(err,info){
            if(err){
                console.log("correo enviado");
                console.log (info.response);
                alimentos="";
            }
        })
        response.write("correo enviado");

    }else{
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("Ruta no encontrada");
    }
    //response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end();
}).listen(8093);

console.log('Servidor Iniciado');