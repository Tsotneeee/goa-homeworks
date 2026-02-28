const {products} = require('../data/data.mjs')

const getAll = (req, res) => {
    if (products.length > 0) res.json({ data: products, success: true })
    else res.json({ message: "emtpy list", success: false })
}

const getById = (req, res) => {
    
}

module.exports = {getAll}