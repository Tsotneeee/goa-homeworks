const http = require("node:http")
const PORT = 6967

const server = http.createServer((req,res)=>{
    try {
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Methods','GET, POST')

        if (req.method == 'GET' && req.url == '/'){
            const rs = `<div>Welcome to Mini API Server!</div>`
            res.statusCode = 200
            res.setHeader('Content-Type','text/html')
            res.end(rs)
        }else if (req.method == 'GET' && req.url == '/time'){
            let date = new Date()
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ time: date }))
        }else {
            res.statusCode = 404
            res.setHeader('Content-Type','text/plain')
            res.end('not found')
        }
        console.log('code ran')
    } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type','text/plain')
        res.end(JSON.stringify(error))
    }
})

server.listen(PORT, ()=> console.log('server running on http://localhost:6967'))