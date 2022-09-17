const http = require('http');

const http = '0.0.0.0';
const port = "5432";

const server = http.createServer((req,res) => {
    res.statusCode = 202;
    res.setHeader('Content-Type', 'text/plain');
    res.end('GFMIC');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
