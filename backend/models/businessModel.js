const mongoose = require("mongoose");

const { ChallengeSchema } = require("./challengeModel");

const BusinessSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	image: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	challenges: [ChallengeSchema],
});

const Business = mongoose.model("Business", BusinessSchema);

/* -------------------------------------------------------------------------- */

module.exports = Business;
