const express = require('express')
const ordersRouter = express.Router()
const { getOrders, addOrder } = require('../data/dbDriver.cjs')

ordersRouter.post('/', (req, res)=>{
    const posted = req.body
    if (!posted) {
        res.status(400).json({ message: "order empty", success: false })
        return
    }
    const idk = addOrder( posted.carId, posted.userId )
})

ordersRouter.get('/', (req, res)=>{
    const orders = getOrders()
    if (orders.length == 0) {
        res.json({ success: false, message: "" })
    }
})

module.exports = ordersRouter