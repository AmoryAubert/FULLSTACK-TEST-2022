const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 4200;

app.get("/", (reg, res) => {
	res.json({
		uuid: "00000000-0000-0000-0000-000000000000",
		label: "Faire mon repository",
		done: false,
	});
});
// open the database
let db = new sqlite3.Database("./db/todo.db", sqlite3.OPEN_CREATE, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to the todo database.");
});

app.listen(PORT, () => {
	console.log(`Listening to  http://localhost:${PORT}`);
});
