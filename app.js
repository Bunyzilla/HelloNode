const http = require("http");
const fs= require("fs");

/*function init(){
    function onRequest(request, response){
        response.writeHead(200,{"Contente-Type": "text/html"});
        response.write("<h1>Hola Mundo</h1>");
        response.end();
    }
    http.createServer(onRequest).listen(1111);
}*/

//init();
//exports.init = init;
/*
exports.init = () => {
    const html = fs.readFile("./indec.html");
    function onRequest(request, response){
        response.writeHead(200,{"Contente-Type": "text/html"});
        response.write(html);
        response.end();
    }
    http.createServer(onRequest).listen(1111);
}*/

exports.init = () => {
    
    http.createServer((request, response) => { 
        fs.readFile("./index.html", (err, obj)=>{
            if(err){
                response.writeHead(404,{"Contente-Type": "text/html"});  
                response.write("error archivo no encontrado");
            }else{
                response.writeHead(200,{"Contente-Type": "text/html"});
                response.write(obj);
            }
            response.end();
        });
    }).listen(1111);
}