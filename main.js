const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// console.log("Ostad Testing",http)
// console.log("Ostad Testing fs",fs)
// console.log("Ostad Testing path",path)


const server = http.createServer((req, res)=>{
    // console.log(`A request was made to: ${req.url}`)
    // console.log("Testing ===========>",req.url)
    // console.log("New Testing==========>",res.write)
    if(req.url === '/'){      
        res.writeHead(200,{'content-type':'text/html'}); //mime type
        // console.log(path.join(__dirname + '/node.html'))
        //  res.write('test');
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        
        res.end();
     }
    else if(req.url === "/node.png"){
        res.writeHead(200,{'content-type':'image/png'});
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end();
    }else if(req.url === "/styles.css"){
        res.writeHead(200,{'content-type':'text/css'});
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end();        
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write(`<h4>Sorry, Buddy You are lost!</h4>`);
        res.end();        
    }
});


server.listen(3000);
console.log("Server is running successfully")