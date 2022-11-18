const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const api = require("./api/v1");
const app = express();
const PORT = 4200;

app.get("/", (req, res) => {
	res.json({
		uuid: "00000000-0000-0000-0000-000000000000",
		label: "Faire mon repository",
		done: false,
	});
});
// // open the database
// let db = new sqlite3.Database("./db/todo.db", sqlite3.OPEN_READWRITE, (err) => {
// 	if (err && err.code == "SQLITE_CANTOPEN") {
// 		createDatabase();
// 		return;
// 	} else if (err) {
// 		console.log("Getting error " + err);
// 	}
// 	runQueries(db);
// 	console.log("db ok");
// });
// function createDatabase() {
// 	var newdb = new sqlite3.Database(
// 		"./db/todo.db",
// 		sqlite3.OPEN_CREATE,
// 		(err) => {
// 			if (err) {
// 				console.log("Getting error " + err);
// 			}
// 			createTables(newdb);
// 		}
// 	);
// }
// function createTables(newdb) {
// 	newdb.exec(
// 		`
//     create table todo (
//         uuid blob primary key not null,
//         label text not null,
//         done boolean not null
//     );
//     `,
// 		() => {
// 			runQueries(newdb);
// 		}
// 	);
// }

app.use("/api/v1", api);

app.listen(PORT, () => {
	console.log(`Listening to  http://localhost:${PORT}`);
});
