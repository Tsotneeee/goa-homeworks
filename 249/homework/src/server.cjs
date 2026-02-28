const express = require('express')
const app = express()
const port = 3000
const productsRouter = require('./routes/productsRouter.cjs')

app.use(express.json())

app.use('/products', productsRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))