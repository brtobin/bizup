const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

const users = require("./users");
const businesses = require("./businesses");

const User = require("../models/userModel");
const Business = require("../models/businessModel");
const Challenge = require("../models/challengeModel");

/* -------------------------------------------------------------------------- */

dotenv.config();
connectDB();

const destroy = async () => {
	try {
		await Business.deleteMany();
		await User.deleteMany();
		await Challenge.deleteMany();

		console.log("Data destroyed successfully!");
		process.exit();
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

const seed = async () => {
	try {
		const newBusiness = await Business.insertMany(businesses);
		const coolBusiness = newBusiness[0]._id;

		const newUsers = await User.insertMany(users);
		const coolUser1 = newUsers[0]._id;
		const coolUser2 = newUsers[1]._id;

		const newChallenges = challenges.map((challenge) => {
			return { ...challenge, completedUsers: [coolUser1, coolUser2], host: coolBusiness };
		});
		await Challenge.insertMany(newChallenges);

		console.log("Data seeded successfully!");
		process.exit();
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

/* -------------------------------------------------------------------------- */

if (process.argv[2] === "-d") {
	destroy();
} else {
	seed();
}
