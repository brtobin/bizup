const bcrypt = require("bcryptjs");

var startTime = Date.now();
var expirationDate = new Date(startTime.getTime() + ((60*60*1000)*24*30));

const challenges = [
	{
		category: "Electronics",
        title: "100th visitor",
        description: "Award for the 100th visitor",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationDate,
	},
	{
		category: "Food",
        title: "Largest purchase",
        description: "Award for the visitor that made the largest purchase",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationDate,
	},
	{
		category: "Dairy",
        title: "Most regular",
        description: "Award for the most regular visitor",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationDate,
	},
];

/* -------------------------------------------------------------------------- */

module.exports = challenges;