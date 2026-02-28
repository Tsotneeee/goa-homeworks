const DATABASE = require('better-sqlite3')

const db = new DATABASE('data.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL
    )
`)

db.exec(`
    
    SELECT * FROM users WHERE age > 18 LIMIT 10

`)