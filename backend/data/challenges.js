const bcrypt = require("bcryptjs");

var startTime = new Date();
var expirationTime = new Date(startTime.getTime() + ((60*60*1000)*24*30));

const challenges = [
	{
		category: "Electronics",
        title: "100th visitor",
        description: "Award for the 100th visitor",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationTime,
	},
	{
		category: "Food",
        title: "Largest purchase",
        description: "Award for the visitor that made the largest purchase",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationTime,
	},
	{
		category: "Dairy",
        title: "Most regular",
        description: "Award for the most regular visitor",
        icon: "https://en.wikipedia.org/wiki/.google#/media/File:Google_2015_logo.svg",
        startTime,
        expirationTime,
	},
    {
        category: "Hotness",
            title: "Flameo Hotman",
            description: "Purchase and eat the one chip challenge without milk or water",
            icon: "https://c.tenor.com/Q6-pbIg279oAAAAd/flameo-hotman.gif",
            startTime,
            expirationTime,
    },
    {
        category: "Distance",
            title: "The road far travelled",
            description: "Visit a small business that is 16 miles away",
            icon: "https://upload.wikimedia.org/wikipedia/commons/8/86/DJCTQ_-_16.JPG",
            startTime,
            expirationTime,
    },
    {
        category: "Games",
            title: "There is no game",
            description: "Feed the goats",
            icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
            startTime,
            expirationTime,
    },
    {
        category: "Baking",
            title: "Baker's Dozen",
            description: "Buy at least 13 eggs at your local bakery",
            icon: "https://previews.123rf.com/images/ctermit/ctermit1009/ctermit100900027/7753428-green-bush-shaped-ball-on-the-clovers-background.jpg",
            startTime,
            expirationTime,
    },
    
    {
        category: "Space",
            title: "Reach for the stars",
            description: "Reach the center of the sun. There will be a cash prize for the first person to do it",
            icon: "https://pics.clipartpng.com/midle/Sun_PNG_Clip_Art-3013.png",
            startTime,
            expirationTime,
    },
    
    {
        category: "Fruits",
            title: "Fruit Ninja",
            description: "Put a banana next to a banana and a watermelon on your head",
            icon: "https://www.pngfind.com/pngs/m/583-5838065_download-banana-png-images-background-banana-png-transparent.png",
            startTime,
            expirationTime,
    },
    {
        category: "Fruits",
            title: "Mango Connoisseur",
            description: "Visit your local Trader Joe's and buy a mango",
            icon: "https://www.clipartmax.com/png/full/76-765847_mango-clip-art-mango-png-vector.png",
            startTime,
            expirationTime,
    },
    
    
];

/* -------------------------------------------------------------------------- */

module.exports = challenges;