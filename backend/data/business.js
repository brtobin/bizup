const bcrypt = require("bcryptjs");

const businesses = [
	{
		name: "XY Enterprises",
		email: "xy@progamer.com",
		password: bcrypt.hashSync("123456", 11),
        image: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        address: "xy, Lake st., Madison, Wisconsin",
        description: "Manufacturers of xy devices",
	},
];
/* -------------------------------------------------------------------------- */
module.exports = businesses;