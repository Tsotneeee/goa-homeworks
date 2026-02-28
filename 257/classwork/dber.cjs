const DATABASE = require('better-sqlite3')

const db = new DATABASE('/257/classwork/app.db')

db.exec(`
    CREATE TABLE IF NOT EXISTS films (

    )    
`)