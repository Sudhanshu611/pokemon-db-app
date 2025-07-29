const Database = require('better-sqlite3');
const db = new Database('pokemon.db');


db.exec(`
        CREATE TABLE IF NOT EXISTS pokemon (
            id INTEGER PRIMARY KEY,
            name TEXT,
            img_url TEXT
        )
    `)

module.exports = db;