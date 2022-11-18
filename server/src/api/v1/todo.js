const express = require("express");

const router = express.Router();

const items = [
	{
		uuid: "00000000-0000-0000-0000-000000000000",
		label: "Faire mon repository",
		done: false,
	},
	{
		uuid: "00000000-0000-0000-0000-000000000000",
		label: "Faire mon repository",
		done: false,
	},
];
router.get("/", (req, res) => {
	res.json({
		items,
	});
});

module.exports = router;
