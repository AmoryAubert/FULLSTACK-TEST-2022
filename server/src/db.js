const sqlite3 = require("sqlite3").verbose();

let sql;
// db connect
const db = new sqlite3.Database("./db/todo.db", (err) => {
	if (err) throw err;
});
// create table
sql = `CREATE TABLE todo(uuid BLOB PRIMARY KEY, label TEXT, done INTEGER)`;
db.run(sql);

db.close((err) => {
	if (err) throw err;
});