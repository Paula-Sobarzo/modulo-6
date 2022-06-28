//carga del modulo file system (manejo de archivos)
var fs=require('fs');

//leemos un archivo
//err:mensaje de error (si es que hay un error al leer archivo)
//data:datos leídos desde el archivo
fs.readFile("ejemplo.txt",function(err, data){
    if(err){
        console.log(err.message);
    }else{
        console.log(data.toString());
    } 
});

//sobreescribir un archivo
fs.writeFile("ejemplo2.txt","texto de ejemplo",function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("archivo guardado correctamente");
    }   
})
//agregar contenido
    fs.appendFile("ejemplo3.txt","\ntexto de ejemplo 1",function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("archivo guardado correctamente");
    }   
})

//abrir archivo
fs.open('ejemplo4.txt','w',function(err,fd){
    if(err){
        console.log(err.message);
    }else{
        console.log("archivo abierto correctamente");
    }    
})

//eliminar archivo
fs.unlink('basura.txt', function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("archivo eliminado correctamente");
    }    
})

//renombrar archivo 
fs.rename('antiguo.txt','nuevo.txt',function(err){
    if(err){
        console.log(err.message);
    }else{
        console.log("archivo renombrado correctamente");
    }   
})