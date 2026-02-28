const express = require('express')
const app = express()
const PORT = 3000
const productRouter = require('./routes/productRouter.cjs')
const cartRouter = require('./routes/cartRouter.cjs')

app.use('/products', productRouter)
app.use('/cart', cartRouter)

app.listen(PORT, ()=> console.log("server running on http://localhost:3000"))