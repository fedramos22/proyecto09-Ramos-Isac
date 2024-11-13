const os = require('os'); //creo una variable para acceder al modulo os de node

console.log(os.cpus()); //ver datos del cpu
console.log(os.platform()); //ver tipo de plataforma
console.log(os.version()); //ver version de windows

const http = require('http');
const fs = require('fs');

const servidor = http.createServer ((peticion, respuesta)=>{

    /* respuesta.end("esto es un mensaje para el usuario"); */

    const url = peticion.url;

    if (url == '/home') {
        fs.readFile ('../Desafio04/index/index.html', (err, data) => {
            if (err) throw err; 
            console.log(data);
            respuesta.end (data);
            
        });
        
    } else {
        respuesta.end ("error");
    }

});



servidor.listen(2000, ()=>{
    console.log("el servidor esta en linea en el puerto 2000");
    
});




