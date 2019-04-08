const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Data = require("./data");
var cors = require("cors");
const app = express();
const router = express.Router();
const dbRoute =
	"mongodb://smokinvapor14:smokinvapor14@ds115263.mlab.com:15263/gtm-support-db";

mongoose.connect(dbRoute, { useNewUrlParser: true });
app.use(cors());
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/getData", (req, res) => {
	Data.find((err, data) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true, data: data });
	});
});

// router.post("/updateData", (req, res) => {
// 	console.log("RESPO", req.body);
// 	const { id, update } = req.body;
// 	Data.findOneAndUpdate(id, update, (err) => {
// 		if (err) return res.json({ success: false, error: err });
// 		return res.json({ success: true });
// 	});
// });

router.post("/putData", (req, res) => {
	let data = new Data();

	const { id, question } = req.body;

	if ((!id && id !== 0) || !question) {
		return res.json({
			success: false,
			error: "INVALID INPUTS"
		});
	}
	data.question = question;
	data.id = id;
	data.save((err) => {
		if (err) return res.json({ success: false, error: err });
		return res.json({ success: true });
	});
});

const port = 5000;
app.use("/api", router);
app.listen(port, () => `Server running on port ${port}`);
