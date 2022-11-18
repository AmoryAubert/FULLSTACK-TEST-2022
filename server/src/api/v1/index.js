const express = require("express");

const router = express.Router();

const todo = require("./todo");

router.get("/", (req, res) => {
	res.json({
		message: "Welcome API",
	});
});

router.use("/todo", todo);

module.exports = router;
