const http = require('node:http');
const PORT = 6967;

const data = {
    GET : 0,
    POST: 0,
    PUT : 0,
    DELETE: 0
}

const server = http.createServer((req, res) => {
    // mas ar inerviulot masalas ar vuswreb ubralod testi chavatare
    //res.setHeader('Access-Control-Allow-Origin', '*');
    data[req.method]++;
    res.statusCode = 200;

    console.log("hello from http://localhost:" + PORT);

    
    res.end(JSON.stringify(data));
});

server.listen(PORT, ()=>{
    console.log("Server is listening on port " + PORT);
});