const User = require("../models/userModel");

const generateToken = require("../utils/generateToken");

/* -------------------------------------------------------------------------- */

const addUser = async (req, res) => {
	const { name, email, password, location, age } = req.body;

	const user = await User.findOne({ email });

	if (user) {
		res.status(400);
		throw new Error("User already exists");
	}

	const newUser = await User.create({
		name,
		email,
		password,
		location,
		age,
	});

	if (newUser) {
		res.status(201).json({
			_id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			age: newUser.age,
			location: newUser.location,
			coins: newUser.coins,
			achievements: newUser.achievements,
			type: newUser.type,
			token: generateToken(newUser._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
};

const authUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			age: user.age,
			location: user.location,
			coins: user.coins,
			achievements: user.achievements,
			type: user.type,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
};

const getProfile = async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			age: user.age,
			location: user.location,
			coins: user.coins,
			achievements: user.achievements,
			type: newUser.type,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

const updateProfile = async (req, res) => {
	const user = await User.findById(req.body._id);

	if (req.body.email && req.body.email !== user.email) {
		const emailUser = await User.findOne({ email: req.body.email });

		if (emailUser) {
			res.status(400);
			throw new Error("User with this email address already exists");
		}
	}

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.password = req.body.password || user.password;
		user.age = req.body.age || user.age;
		user.location = req.body.location || user.location;
		user.coins = req.body.coins || user.coins;
		user.achievements = req.body.achievements || user.achievements;

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			age: updatedUser.age,
			location: updatedUser.location,
			coins: updatedUser.coins,
			achievements: updatedUser.achievements,
			type: updatedUser.type,
			token: generateToken(updatedUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = { addUser, authUser, getProfile, updateProfile };
