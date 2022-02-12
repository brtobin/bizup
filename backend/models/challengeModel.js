const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema(
	{
		host: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Business",
			require: true,
		},
		category: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		startTime: {
			type: Date,
			required: true,
		},
		expirationTime: {
			type: Date,
			required: true,
		},
		completedUsers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{ timestamps: true }
);

const Challenge = mongoose.model("Challenge", ChallengeSchema);

/* -------------------------------------------------------------------------- */

module.exports = Challenge;
