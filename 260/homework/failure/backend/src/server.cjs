const express = require('express')
const app = express()
const cors = require('cors')
const {db, createUser, getUsers, getUserByUsername, getUserById, createProduct, getProducts, getProductById, getStats, addCount } = require('./data/dbDriver.cjs')
const PORT = 3000

app.use(express.json())
app.use(cors())

let products = getProducts()
let users = getUsers()

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body
    if (users.some(user => user.username === username)) {
        res.status(400).json({ success: false, message: 'Username already exists' })
        return
    }
    const userId = createUser(username, email, password)
    users = getUsers()
    res.status(201).json({ success: true, id: userId })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    const user = getUserByUsername(username)
    if (!user || user.password !== password) {
        res.status(401).json({ success: false, message: 'Invalid username or password' })
        return
    }
    res.status(200).json({ success: true, id: user.id })
})

app.get('/products', (req, res) => {
    const products = getProducts()
    res.json({ data:products, success: true })
})

app.get('/products/:id', (req, res) => {
    const product = getProductById(req.params.id)
    if (!product) {
        res.status(404).json({ success: false, message: 'Product not found' })
        return
    }
    res.json({ data:product, success: true })
})

app.post('/products', (req, res) => {
    const { title, description, price, count } = req.body
    const productId = createProduct(title, description, price, count)
    products = getProducts()
    res.status(201).json({ success: true, id: productId })
})

app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id)
    if (!user) {
        res.status(404).json({ success: false, message: 'User not found' })
        return
    }
    res.json({ data:user, success: true })
})

app.patch('/products/:id', (req, res) => {
    addCount(req.params.id)
    if (!getProductById(req.params.id)) {
        res.status(404).json({ success: false, message: 'Product not found' })
        return
    }
    res.json({ success: true })
})



app.get('/stats', (req, res) => {
    const stats = getStats()
    res.json({ data:stats, success: true })
})

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))