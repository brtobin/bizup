const bcrypt = require("bcryptjs");

const users = [
	{
		name: "Khai Bui",
		email: "kb@progamer.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Chirag Bhardwaj",
		email: "cb@progamer.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Jane Doe",
		email: "jd@progamer.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

/* -------------------------------------------------------------------------- */

module.exports = users;
