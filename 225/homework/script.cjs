const http = require('node:http')
const PORT = 6967

let num = 0

const date = new Date()

const server = http.createServer((req, res) => {
    try {
        let info = ""
        res.statusCode = 200
        info += `${req.method}: ${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
        console.log("hello ")
        num++
        
        console.log(num)
        console.log(req.method)
        
        res.end(info)
    } catch (err) {
        res.statusCode = err || 500
        res.end("Internal Server Error")
    }
    finally {
        res.end()
    }
})

server.listen(PORT, () => console.log("server running on http://localhost:6967"))