const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
	challenges: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Challenge",
		},
	],
});

BusinessSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(11);
	this.password = await bcrypt.hash(this.password, salt);
});

BusinessSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const Business = mongoose.model("Business", BusinessSchema);

/* -------------------------------------------------------------------------- */

module.exports = Business;
