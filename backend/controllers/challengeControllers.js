const Challenge = require("../models/challengeModel");

/* -------------------------------------------------------------------------- */

const addChallenge = async (req, res) => {
	const { title, description, icon, startTime, expirationTime, category } = req.body;

	const challenge = await Challenge.findOne({ title: title, host: req.business._id });

	if (challenge) {
		res.status(400);
		throw new Error("Challenge already exists");
	}
	const newChallenge = await Challenge.create({
		title,
		description,
		icon,
		startTime,
		expirationTime,
		category,
		host: req.business._id,
	});

	if (newChallenge) {
		res.status(201).json({
			_id: newChallenge._id,
			title: newChallenge.title,
			description: newChallenge.description,
			icon: newChallenge.icon,
			startTime: newChallenge.startTime,
			expirationTime: newChallenge.expirationTime,
			host: newChallenge.host,
		});
	} else {
		res.status(400);
		throw new Error("Invalid challenge data");
	}
};

const getChallenge = async (req, res) => {
	const params = req.params;
	const challenge = await Challenge.findById(params.id).populate("host");

	if (challenge) {
		res.json({
			_id: challenge._id,
			title: challenge.title,
			description: challenge.description,
			icon: challenge.icon,
			startTime: challenge.startTime,
			expirationTime: challenge.expirationTime,
			host: challenge.host,
		});
	} else {
		res.status(404);
		throw new Error("Challenge not found");
	}
};

const updateChallenge = async (req, res) => {
	const params = req.params;
	const challenge = await Challenge.findById(params.id).populate("host");

	if (challenge) {
		challenge.title = req.body.title || challenge.title;
		challenge.description = req.body.description || challenge.description;
		challenge.icon = req.body.icon || challenge.icon;
		challenge.startTime = req.body.startTime || challenge.startTime;
		challenge.expirationTime = req.body.expirationTime || challenge.expirationTime;

		const updatedChallenge = await business.save();

		res.json({
			_id: updatedChallenge._id,
			title: updatedChallenge.title,
			description: updatedChallenge.description,
			icon: updatedChallenge.icon,
			startTime: updatedChallenge.startTime,
			expirationTime: updatedChallenge.expirationTime,
			host: updatedChallenge.host,
		});
	} else {
		res.status(404);
		throw new Error("Challenge not found");
	}
};

const deleteChallenge = async () => {
	const params = req.params;
	const removedChallenge = await Challenge.deleteOne({ _id: params.id });
	if (removedChallenge) {
		res.json({
			_id: removedChallenge._id,
			title: removedChallenge.title,
			description: removedChallenge.description,
			icon: removedChallenge.icon,
			startTime: removedChallenge.startTime,
			expirationTime: removedChallenge.expirationTime,
			host: removedChallenge.host,
		});
	} else {
		res.status(404);
		throw new Error("Challenge not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = { addChallenge, getChallenge, updateChallenge, deleteChallenge };
