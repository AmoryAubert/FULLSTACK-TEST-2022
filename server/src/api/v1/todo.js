const express = require("express");
const sqlite3 = require("sqlite3");
const router = express.Router();

const db = new sqlite3.Database("./src/db/todo.db", (err) => {
	if (err) throw err;
});

let items = [];
db.get("SELECT * FROM todo", (err, data) => {
	if (err) throw err;
	items.push(data);
	console.log(data);
});

router.get("/", (req, res) => {
	res.json({
		items,
	});
});

module.exports = router;
