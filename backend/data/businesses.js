const bcrypt = require("bcryptjs");

const businesses = [
	{
		type: "business",
		name: "XY Enterprises",
		email: "xy@progamer.com",
		password: bcrypt.hashSync("123456", 11),
		image: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
		address: "xy, Lake st., Madison, Wisconsin",
		description: "Manufacturers of xy devices",
	},
	{
		type: "business",
		name: "XY Enterprises",
		email: "xy@progamer.com",
		password: bcrypt.hashSync("123456", 11),
		image: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
		address: "xy, Lake st., Madison, Wisconsin",
		description: "Manufacturers of xy devices",
	},
	{
		type: "restuarant",
		name: "Kiki's Delivery Service",
		email: "kiki@delivery.com",
		password: bcrypt.hashSync("987484", 11),
		image: "",
		address: "xy, Lake st., Madison, Wisconsin",
		description: "Has good food on a broom",
	},
	{
		type: "business",
		name: "Fence-mart",
		email: "fence@mart.com",
		password: bcrypt.hashSync("333666", 11),
		image: "",
		address: "xy, Lake st., Madison, Wisconsin",
		description: "Has good food on a broom",
	},
];
/* -------------------------------------------------------------------------- */
module.exports = businesses;
