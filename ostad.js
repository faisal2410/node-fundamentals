const http = require('http');
const fs = require('fs');

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url==='/'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'My-Own-Header':'Hello world'
        });
        const nodeData=fs.readFileSync(`${__dirname}/node.html`,'utf-8')
        res.write(nodeData,'utf-8',()=>{
            console.log("We love Rayan Dall")
        });
        res.end(`ostad`,'utf-8',()=>{
            console.log("=======>","We love js")
        })
    }else if(req.url==='/node.png'){
        res.writeHead(200,{
            'Content-Type':'image/png'
        })
        const image=fs.readFileSync('node.png')
        res.write(image);
        res.end();
    }
    
    else{
        res.writeHead(404,{
            'Content-Type':'text/html',
            'My-Own-Header':'Hello'
        });
        res.write(`<h1>Page not found</h1>`,'utf-8',()=>{
            console.log("We love Rayan Dall")
        });
        res.end(`ostad`,'utf-8',()=>{
            console.log("=======>","We love js")
        })
    }
  

})


server.listen(8000,()=>{console.log(`Server is running successfully`)})