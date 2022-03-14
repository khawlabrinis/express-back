const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
});

const memberModel = mongoose.model("member", memberSchema);

module.exports = memberModel;
