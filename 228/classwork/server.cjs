const http = require('node:http')
const PORT = 6967

const server = http.createServer((req,res)=>{
    try {
        //res.setHeader('Access-Control-Allow-Origin', '*');
        res.statusCode = 200;
        if (req.method == "POST"){
            res.write(req.body)
        }
    }catch {
        res.statusCode = 500
        res.end("error")
    }finally{
        console.log("hello");
        res.end("done")
    }
})

server.listen(PORT, ()=>console.log("server ran on http://localhost:6967"))