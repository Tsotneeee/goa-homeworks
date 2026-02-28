const { products } = require('../data.js')

const getAllProducts = (req, res) => {
  res.json({ data: products, success: true })
}

const getProductById = (req, res) => {
    const product = products.find(el => el.id == req.params.id)
    res.json({ data: product, success: true })
}

module.exports = { getAllProducts, getProductById }