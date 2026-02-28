const DATABASE = require('better-sqlite3')

const db = new DATABASE('app.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        item TEXT NOT NULL
    )    
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS banned (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL
    )    
`)

module.exports = { db }