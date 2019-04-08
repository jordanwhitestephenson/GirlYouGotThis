// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
	{
		question: {
			field: String,
			question: String,
			answer: String,
			topic: String,
			resource: String,
			comfortLevel: Number,
			importanceLevel: Number
		}
	},
	{ timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
