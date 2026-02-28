const DATABASE = require('better-sqlite3');

const db = new DATABASE('vite-project/backend/src/data/theDb.db');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    gender TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL
)
`)

db.exec(`
CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT NOT NULL
)
`)

function addUser(username, email, password, gender, address, phone) {
    const stmt = db.prepare(`INSERT INTO users (username, email, password, gender, address, phone) VALUES (?, ?, ?, ?, ?, ?)`)
    return stmt.run(username, email, password, gender, address, phone)
}

function getUsers() {
    const stmt = db.prepare(`SELECT * FROM users`)
    return stmt.all()
}

function addCar(name, description, price, image) {
    const stmt = db.prepare(`INSERT INTO cars (name, description, price, image) VALUES (?, ?, ?, ?)`)
    return stmt.run(name, description, price, image)
}

function getCars() {
    const stmt = db.prepare(`SELECT * FROM cars`)
    return stmt.all()
}

function activeUsers() {
    const stmt = db.prepare(`SELECT count(*) as count FROM users`)
    return stmt.get().count
}

function getUserByUsername(username){
    const stmt = db.prepare(`SELECT * FROM users WHERE username = ?`)
    return stmt.get(username)
}

function carsFilter(filter) {
    const stmt = db.prepare(`SELECT * FROM cars WHERE name LIKE ? OR description LIKE ?`)
    return stmt.all(`%${filter}%`, `%${filter}%`)
}

module.exports = { db, addUser, getUsers, getCars, getUserByUsername, addCar, activeUsers, carsFilter };