const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//? cart, products, orders

//app.get('/products')

//* path - /products
// GET - / , /:id , 

//* path - /cart
// GET - / , /:id
// POST - /
// DELETE - / , /:id

//* path - /orders
// GET - /:id , /

// { id, name, category, price, rate }

const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 29.99, rate: 4.3 },
  { id: 2, name: "Mechanical Keyboard", category: "electronics", price: 89.99, rate: 4.7 },
  { id: 3, name: "Running Shoes", category: "fashion", price: 59.99, rate: 4.2 },
  { id: 4, name: "Cotton T-Shirt", category: "fashion", price: 14.99, rate: 4.0 },
  { id: 5, name: "Coffee Maker", category: "home", price: 74.99, rate: 4.5 },
  { id: 6, name: "Blender", category: "home", price: 49.99, rate: 4.1 },
  { id: 7, name: "Notebook", category: "stationery", price: 3.99, rate: 3.9 },
  { id: 8, name: "Ballpoint Pen Set", category: "stationery", price: 6.49, rate: 4.4 },
  { id: 9, name: "Protein Powder", category: "fitness", price: 34.99, rate: 4.6 },
  { id: 10, name: "Yoga Mat", category: "fitness", price: 19.99, rate: 4.2 }
];

const cart = []
// cart = [ {product: {...product}, count: 1 } ]

const orders = []
// const order = [ {orderDate: '10-2', item: cart, id: 2} ]

app.get('/products/', (req, res) => {
    res.json({ data: products, success: true })
})

app.get('/products/:id', (req, res) => {
    const product = products.find(el => el.id == req.params.id)

    res.json({data: product, success: true})
})

app.get('/cart', (req, res) => {
    res.json({ data: cart, success: true })
})

app.get('/cart/:id', (req, res) => {
    const item = cart.find( el => req.params.id == el.product.id )
    res.status(200).json({ data: item, success: true })
})

app.post('/cart', (req, res) => {
    const newProduct = req.body
    cart.push(newProduct)
    res.status(201).json({ data: newProduct, success: true })
})

app.delete('/cart', (req, res) => {
    cart = []
    res.json({ message: "cart cleared", success: true })
})

app.delete('cart/:id', (req, res) => {
    const theId = cart.findIndex(el => el.products.id == req.params.id)
    cart.splice(theId,1)
    res.json({ message: "item deleted", success: true })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))