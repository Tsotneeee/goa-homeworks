const Database = require('better-sqlite3')

const db = new Database('279/homework/data.db')

// db.exec(`
// CREATE TABLE IF NOT EXISTS messages (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     message TEXT NOT NULL
// )
// `)

// db.exec(`
// CREATE TRIGGER IF NOT EXISTS deleted_check
// AFTER DELETE ON messages
// FOR EACH ROW
// BEGIN

// END;
// `)