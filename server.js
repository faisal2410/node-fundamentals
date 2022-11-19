const http = require('http');
const fs = require('fs');

const nodeData=fs.readFileSync('node.html','utf-8')
// const imageData=fs.readFileSync('node.png','utf-8')

const server=http.createServer((req,res)=>{
// console.log("==========>",req.url)


if(req.url==="/home"){
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.write(nodeData);
    res.end()
}else if(req.url==="/product"){
    res.writeHead(201,{
        'Content-Type':'text/html'
    })
    res.write(`<h2>Product info</h2>`);
    res.end();
}else if(req.url==='/node.png'){
    res.writeHead(200,{
        'Content-Type':'image/png'
    })
    const image=fs.readFileSync('node.png')
    res.write(image);
    res.end();
}else if(req.url==='/styles.css'){
    res.writeHead(200,{
        'Content-Type':'text/css'
    })
    const css = fs.readFileSync('styles.css')    
    res.write(css);
    res.end();
}
else if(req.url==='/about.css'){
    res.writeHead(200,{
        'Content-Type':'text/css'
    })
    const css1 = fs.readFileSync('about.css')    
    res.write(css1);
    res.end();
}
else{
    res.writeHead(404,{
        'Content-Type':'text/html'
    })
    res.write(`<h1>Page not found</h1>`);
    res.end()
}



});



server.listen(8000);
console.log("Server run")





