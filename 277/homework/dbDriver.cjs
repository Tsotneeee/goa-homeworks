const Database = require('better-sqlite3')

const db = new Database('277/homework/data.db')

// my tasks :)
db.exec(`
CREATE TABLE IF NOT EXISTS tasks ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL
)    
`)

// task history
db.exec(`
CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL
)    
`)

// plus trgr
db.exec(`
CREATE TRIGGER IF NOT EXISTS pluser
AFTER INSERT ON history
FOR EACH ROW
BEGIN
    DELETE FROM tasks WHERE task = NEW.task;
END;
`)

function addTask(task) {
    const stmt = db.prepare(`INSERT INTO tasks (task) VALUES (?)`)
    return stmt.run(task)
}

function getTasks() {
    const stmt = db.prepare(`SELECT * FROM tasks`)
    return stmt.all()
}

function getTaskById(id) {
    const stmt = db.prepare(`SELECT * FROM tasks WHERE id = ?`)
    return stmt.get(id)
}

function plus(id){
    const taskItself = getTaskById(id)
    if (!taskItself) return -1
    const stmt = db.prepare(`INSERT INTO history (task) VALUES (?)`)
    return stmt.run(taskItself)
}

function getHistory() {
    return db.prepare(`SELECT * FROM history`).all()
}

module.exports = { db, addTask, plus, getTasks, getHistory}