const express = require('express')
const cartRouter = express.Router()
const { getCartAll, addProduct, getItemById, clearCart, deleteItemById} = require('../controllers/cartController.cjs')

cartRouter.get('/', getCartAll)

cartRouter.get('/:id', getItemById)

cartRouter.post('/add', addProduct)

cartRouter.delete('/', clearCart)

cartRouter.delete('/:id', deleteItemById)

module.exports = cartRouter