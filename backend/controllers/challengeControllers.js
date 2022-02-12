const mongoose = require("mongoose");

const Business = require("../models/businessModel");
const Challenge = require("../models/challengeModel");
const User = require("../models/userModel");

/* -------------------------------------------------------------------------- */

const updateBusiness = async (id, challengeId) => {
	let business = await Business.findById(id);
	if (business.challenges.includes(id)) {
		business.challenges = business.challenges.filter((chall) => {
			return chall !== challengeId;
		});
	} else {
		business.challenges.push(id);
	}
	await business.save();
};

const updateUsers = async (userId, challengeId, coin) => {
	let user = await User.findById(userId);
	user.achievements.push(challengeId);
	user.coins += coin;
	const newUser = await user.save();
	return newUser;
};

/* -------------------------------------------------------------------------- */

const addChallenge = async (req, res) => {
	const { title, description, icon, startTime, expirationTime, category, reward } = req.body;

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
		reward,
		host: req.business._id,
	});

	if (newChallenge) {
		updateBusiness(newChallenge.host, newChallenge._id);
		res.status(201).json({
			_id: newChallenge._id,
			title: newChallenge.title,
			description: newChallenge.description,
			icon: newChallenge.icon,
			startTime: newChallenge.startTime,
			expirationTime: newChallenge.expirationTime,
			reward: newChallenge.reward,
			host: newChallenge.host,
		});
	} else {
		res.status(400);
		throw new Error("Invalid challenge data");
	}
};

const getAllChallenges = async (req, res) => {
	const challenges = await Challenge.find();

	console.log(challenges);

	if (challenges) {
		res.json(challenges);
	} else {
		res.status(404);
		throw new Error("Challenges not found");
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
			reward: challenge.reward,
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
		challenge.reward = req.body.reward || challenge.reward;

		const updatedChallenge = await business.save();

		res.json({
			_id: updatedChallenge._id,
			title: updatedChallenge.title,
			description: updatedChallenge.description,
			icon: updatedChallenge.icon,
			startTime: updatedChallenge.startTime,
			expirationTime: updatedChallenge.expirationTime,
			reward: updatedChallenge.reward,
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
		updateBusiness(removedChallenge.host, removedChallenge._id);
		res.json({
			_id: removedChallenge._id,
			title: removedChallenge.title,
			description: removedChallenge.description,
			icon: removedChallenge.icon,
			startTime: removedChallenge.startTime,
			expirationTime: removedChallenge.expirationTime,
			reward: removedChallenge.reward,
			host: removedChallenge.host,
		});
	} else {
		res.status(404);
		throw new Error("Challenge not found");
	}
};

const awardUser = async (req, res) => {
	const params = req.params;
	const winningUser = await User.findOne({ email: params.user });
	let challenge = await Challenge.findById(params.id);
	if (challenge && winningUser) {
		if (challenge.completedUsers.includes(winningUser._id)) {
			res.status(401);
			throw new Error("User has already won this challenge");
		}
		challenge.completedUsers.push(winningUser._id);
		const newUser = await updateUsers(winningUser._id, challenge._id, challenge.reward);
		const newChallenge = await challenge.save();
		res.json(newUser);
	} else {
		res.status(404);
		throw new Error("Challenge or user not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = {
	addChallenge,
	getChallenge,
	updateChallenge,
	deleteChallenge,
	getAllChallenges,
	awardUser,
};
