const express = require('express')
const app = express()
const PORT = 3000
const {db, addTask, plus, getHistory, getTasks} = require('./dbDriver.cjs')

app.get('/tasks', (req, res)=>{
    const result = getTasks()
    res.json({data: result, success: true})
})

app.get('/history', (req, res)=>{
    const result = getHistory()
    res.json({data: result, success: true})
})

app.post('/tasks', express.json(),(req, res)=>{
    const body = req.body // this should be just a task no id and those
    if (body == {}) {
        res.status(400).json({succes: false, message: "empty object"})
    }
    const result = addTask(body)
    res.json({succes:true, data:body})
})

app.get()

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))