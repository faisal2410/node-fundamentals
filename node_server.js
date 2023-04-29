const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        console.log(req.url);
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        const homePageHtml = fs.readFileSync('node_test.html');
        // console.log(homePageHtml);
        res.write(homePageHtml);
        res.end();    
        
    } else if (req.url == "/node.png") {
        res.writeHead(200, {
            'content-type': 'image/png'
        });
        const image = fs.readFileSync("node.png");
        res.write(image)
        res.end();
    } else if (req.url == "/styles.css") {
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        const css = fs.readFileSync("styles.css");
        res.write(css)
        res.end();
    }
    
    else {
        console.log(req.url);
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.write('<h1>This is not the page you are looking for</h1>')
        res.end();
    }
   
})

server.listen(3000);
console.log("Server Running successfully");