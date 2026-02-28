const DATABASE = require('better-sqlite3')

const db = new DATABASE('db.sqlite')

db.exec(`
    CREATE TABLE IF NOT EXISTS authors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        birthYear YEAR NOT NULL,
        country TEXT NOT NULL
    )
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL UNIQUE,
        authorId INTEGER NOT NULL,
        releaseYear YEAR DEFAULT (strftime('%Y', 'now')) CHECK (releaseYear > 0),
        genre TEXT NOT NULL
    )
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        lastName TEXT NOT NULL,
        joiningDate DATE DEFAULT CURRENT_DATE CHECK (joiningDate > 0000-00-00)
    )
`)

module.exports = {db}