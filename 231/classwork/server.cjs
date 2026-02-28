const http = require('http');
const PORT = 6967

let chunks = ""

let data = {}

const server = http.createServer((req,res)=>{
    try {
        res.statusCode = 200
        req.on('data', chunk =>{
            chunks += chunk
            res.statusCode = 102
            console.log("chunk recieved")
        })
        req.on('end',()=> data = chunks)
        res.statusCode = 201
        if (req.method == "GET") {

        }else if (req.method == "POST") {
            console.log(chunks)
        }

        console.log("request recieved")
        res.end(chunks)
    } catch {
        res.statusCode = 500
        console.log("error occured")
        res.end('error')
    }
})

server.listen(PORT, ()=> console.log("server running on http://localhost:6967"))

server.on('close',()=> console.log("closed server"))

