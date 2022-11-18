const express = require("express");

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

app.use("/api/v1", api);

app.listen(PORT, () => {
	console.log(`Listening to  http://localhost:${PORT}`);
});
