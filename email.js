//contraseña del correo generada: xqdszykzkzcnvxnp

//1. cargar el  modemailer
var nodemailer=require('nodemailer');

//2.1-configuracion del servidor
var transporter=nodemailer.createTransport({
    service :'gmail',
    auth :{
        user: 'pasobarzo45@gmail.com',
        pass: 'xqdszykzkzcnvxnp'
    }
});

//2.2.--configurar el mensaje de correo
var mailOptions = {
    from:'cursonode@plataforma5.cl',// es inventado, puede no existir
    to: 'pasobarzo45@gmail.com',
    subject:'Saludos desde Node!!',
    text: "Mi primer ejemplo de correo generados por node"
};

//3.- enviar el correo
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response);
    }
})