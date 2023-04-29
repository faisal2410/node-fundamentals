const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

