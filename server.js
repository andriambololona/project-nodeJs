var http=require('http');

function start(){
    function onRequest(request,response){
        console.log("Request received");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(9999);
    console.log("Demarrage du serveur");
}
exports.run=start; 