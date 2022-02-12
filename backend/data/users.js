const bcrypt = require("bcryptjs");

const users = [
	{
		type: "user",
		name: "Khai Bui",
		email: "kb@progamer.com",
		age: 19,
		location: "nunyabusiness",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		type: "user",
		name: "Chirag Bhardwaj",
		email: "cb@progamer.com",
		age: 20,
		location: "nunyabusiness",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		type: "user",
		name: "Jane Doe",
		email: "jd@progamer.com",
		age: 40,
		location: "nunyabusiness",
		password: bcrypt.hashSync("123456", 10),
	},
];

/* -------------------------------------------------------------------------- */

module.exports = users;
