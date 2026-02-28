const express = require('express')
const carsRouter = express.Router()
const { addCar, getCars, carsFilter } = require('../data/dbDriver.cjs')

carsRouter.post('/', (req, res) => {
    if (!req.body.name || !req.body.description || !req.body.price || !req.body.image) {
        res.json({ success: false, message: "Missing required fields" })
        return
    }
    const { name, description, price, image } = req.body
    const result = addCar(name, description, price, image)
    res.json({data:result, success: true})
})

carsRouter.get('/', (req, res) => {
    const cars = getCars()
    if (cars.length === 0) {
        res.json({data:cars, success: false, message: "No cars found"})
    } else {
        res.json({data:cars, success: true})
    }
})

carsRouter.post('/filter', (req, res) => {
    if (!req.body.filter) {
        res.status(400).json({ success: false, message: "empty body" })
        return
    }
    const { filter } = req.body
    const cars = carsFilter(filter)
    res.json({data:cars, success: true})
})

module.exports = carsRouter