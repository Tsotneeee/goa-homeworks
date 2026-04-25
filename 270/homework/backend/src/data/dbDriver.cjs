const Database = require('better-sqlite3')

const db = new Database('270/homework/backend/src/data/data.db')

db.exec(`
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)
`)

db.exec(`
CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL,
    group_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
)    
`)

function clearTable(table){ //! testing clear
    db.exec(`DELETE FROM ${table}`)
}

// clearTable('Users') //^ help tool

function getUsers() {
    const stmt = db.prepare('SELECT * FROM Users')
    return stmt.all()
}

function getUserById(id) {
    // console.log("this: ", id)
    const stmt = db.prepare(`SELECT * FROM Users WHERE id = ?`)
    return stmt.get(id)
}

function getUserByUsername(username) {
    const stmt = db.prepare(`SELECT * FROM Users WHERE username = ?`)
    return stmt.get(username)
}

function addUser(obj) { // { username, password }
    const stmt = db.prepare(`INSERT INTO Users (username, email, password) VALUES (?, ?, ?)`)
    return stmt.run(obj.username, obj.email, obj.password)
}

//// console.log(addUser({username: "tsotne", password: "greg32"}))
//// console.log(getUserById(1))

function getHistory() {
    return db.prepare(`SELECT * FROM history`).all()
}

function getHistoryByGroupId(id) {
    const stmt = db.prepare(`SELECT h.message, u.username FROM history h JOIN Users u ON h.user_id = u.id WHERE h.group_id = ?`).all(id)
    return stmt
}

function addHistory(obj) { // add message { userID, message, groupId }
    const stmt = db.prepare(`INSERT INTO history (message, group_id, user_id) VALUES (?, ?, ?)`)
    return stmt.run(obj.message, obj.groupId, obj.userId)
}

//// console.log(addHistory({message: "hello", groupId: 1, userId:1}))
//// console.log(getHistoryByGroupId(1))

module.exports = { db, getUsers, getUserById, getUserByUsername, addUser, getHistory, getHistoryByGroupId, addHistory }