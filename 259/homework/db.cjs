const DATABASE = require('better-sqlite3')

const db = new DATABASE('data.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS sentences (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    sentence TEXT NOT NULL
    );    
`)

module.exports = {db}