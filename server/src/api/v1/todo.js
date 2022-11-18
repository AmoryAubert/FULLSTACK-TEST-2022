const express = require("express");
const sqlite3 = require("sqlite3");
const axios = require("axios");
const router = express.Router();

const db = new sqlite3.Database("./src/db/todo.db", (err) => {
	if (err) throw err;
});

let items;
db.get("SELECT * FROM todo", (err, data) => {
	if (err) throw err;
	items = data;
	console.log(data);
});

router.get("/", (req, res) => {
	res.json({
		items,
	});
});

// const data = {
// 	name: "John Doe",
// 	job: "Content Writer",
// };

// axios
// 	.post("http://localhost:4200/api/v1/todo", data)
// 	.then((res) => {
// 		//console.log(`Status: ${res.status}`);
// 		console.log("Body: ", res.data);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

module.exports = router;
