const DATABASE = require('better-sqlite3');

const db = new DATABASE('online-shop/backend/src/data/database.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
    
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        count INTEGER NOT NULL
    )
`)

function createUser(username, email, password) {
    const stmt = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)')
    const info = stmt.run(username, email, password)
    return info.lastInsertRowid
}

function getUsers() {
    const stmt = db.prepare('SELECT * FROM users')
    return stmt.all()
}

function getUserByUsername(username) {
    const stmt = db.prepare('SELECT * FROM users WHERE username = ?')
    return stmt.get(username)
}

function getUserById(id) {
    const stmt = db.prepare('SELECT * FROM users WHERE id = ?')
    return stmt.get(id)
}

function createProduct(title, description, price, count) {
    const stmt = db.prepare('INSERT INTO products (title, description, price, count) VALUES (?, ?, ?, ?)')
    const info = stmt.run(title, description, price, count)
    return info.lastInsertRowid
}

function getProducts() {
    const stmt = db.prepare('SELECT * FROM products')
    return stmt.all()
}

function getProductById(id) {
    const stmt = db.prepare('SELECT * FROM products WHERE id = ?')
    return stmt.get(id)
}

function getStats() {
    const stmt = db.prepare('SELECT COUNT(*) AS count, SUM(price) AS priceSum FROM products')
    return stmt.get()
}

function addCount(id) {
    const stmt = db.prepare('UPDATE products SET count = count + 1 WHERE id = ?')
    stmt.run(id)
}

module.exports = { db, createUser, getUsers, getUserByUsername, getUserById, createProduct, getProducts, getProductById, getStats, addCount };