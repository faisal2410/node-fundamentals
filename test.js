const http = require('http');

const server=http.createServer((req,res)=>{

    res.writeHead(200,{
        'Content-type':'text/html'
    })
    res.write(`<h1>Hello world</h1>`);
    res.end();

})

server.listen(8000);
console.log("Server running")