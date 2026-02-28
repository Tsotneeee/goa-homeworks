const express = require('express')
const app = express()
const PORT = 6967

app.get('/', (req, res) => {
    res.end('hello')
})

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))