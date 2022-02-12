const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/database");

const users = require("./users");
const businesses = require("./businesses");
const challenges = require("./challenges");

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
		const newUsers = await User.insertMany(users);

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
