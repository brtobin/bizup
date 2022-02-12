const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
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
	age: {
		type: Number,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	coins: {
		type: Number,
		default: 0,
		required: true,
	},
	achievements: [
		{
			title: { type: String, required: true },
			category: { type: String, required: true },
			icon: { type: String, required: true },
			reward: { type: Number, required: true },
			id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Challenge",
				required: true,
			},
		},
	],
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

/* -------------------------------------------------------------------------- */

module.exports = User;
