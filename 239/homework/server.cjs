const express = require('express')
const app = express()
const PORT = 3000

let reqs = 0

app.use((req, res , next) => {
    reqs++
    console.log(reqs)
    next()
})

app.get('/', (req, res) => res.send('welcome to mini API server!'))

app.get('/time', (req, res) => res.send({ time: new Date().toString() }))

app.post('/echo', express.json(), (req, res) => {
    res.send({ yourSent: req.body.message })
})

app.get('/square/:number', (req, res) => {
    const number = Number(req.params.number)
    res.send({ square: number * number })
})

app.post('/sum', express.json(), (req, res) => {
    const numbers = req.body.numbers
    let sum = 0
    for (let num of numbers) {
        sum += num
    }
    res.send({ sum: sum })
})

app.use((req, res) => {
    res.status(404).send({ error: 'Not Found' })
})

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))