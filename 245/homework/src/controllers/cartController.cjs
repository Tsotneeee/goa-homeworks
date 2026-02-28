const { cart } = require('../data.js')

const getCartAll = (req, res) => {
  res.json({ data: cart, success: true })
}

const getItemById = (req, res) => {
  const id = req.params.id
  const item = cart.find(item => item.id === id)
  res.json({ data: item, success: true })
}

const addProduct = (req, res) => {
  const item = req.body
  cart.push(item)
  res.json({ data: cart, success: true })
}

const clearCart = (req, res) => {
  cart = []
  res.json({ data: cart, success: true })
}

const deleteItemById = (req, res) => {
  const id = req.params.id
  const index = cart.findIndex(item => item.id === id)
  cart.splice(index, 1)
  res.json({ data: cart, success: true })
}

module.exports = { getCartAll, addProduct, getItemById, clearCart, deleteItemById }