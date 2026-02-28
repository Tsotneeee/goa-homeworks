const express = require('express')
const productsRouter = express.Router()
const {getAll} = require('../controllers/productController.cjs')

productsRouter.get('/', getAll)

module.exports = productsRouter