const express = require('express')
const app = express()
const PORT = 3000
const usersRouter = require('./routes/usersRouter.cjs')
const historyRouter = require('./routes/historyRouter.cjs')

app.use(express.json())

app.use('/users', usersRouter)

app.use('/chat', historyRouter)

app.use((req, res)=>{
    res.status(404).send("invalid route")
})

app.listen(PORT, () => console.log(`server listening on PORT ${PORT}!`))