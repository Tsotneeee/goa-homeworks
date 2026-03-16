const express = require('express')
const app = express()
const cors = require('cors')
const usersRouter = require('./routers/usersRouter.cjs')
const carsRouter = require('./routers/carsRouter.cjs')
const ordersRouter = require('./routers/ordersRouter.cjs')
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/cars', carsRouter)
app.use('/orders', ordersRouter)

app.use((req, res) => {
    res.status(404).json({ success: false, message: "Endpoint not found" })
})

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}!`))