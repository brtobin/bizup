const Business = require("../models/businessModel");

const generateToken = require("../utils/generateToken");

/* -------------------------------------------------------------------------- */

const addBusiness = async (req, res) => {
	const { name, email, password, image, address, description } = req.body;

	const business = await Business.findOne({ email });

	if (business) {
		res.status(400);
		throw new Error("Business already exists");
	}

	const newBusiness = await Business.create({
		name,
		email,
		password,
		address,
		image,
		description,
	});

	if (newBusiness) {
		res.status(201).json({
			_id: newBusiness._id,
			name: newBusiness.name,
			email: newBusiness.email,
			address: newBusiness.address,
			image: newBusiness.image,
			description: newBusiness.description,
			token: generateToken(newBusiness._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid business data");
	}
};

const authBusiness = async (req, res) => {
	const { email, password } = req.body;

	const business = await Business.findOne({ email });

	if (business && (await business.matchPassword(password))) {
		res.json({
			_id: business._id,
			name: business.name,
			email: business.email,
			age: business.age,
			location: business.location,
			coins: business.coins,
			achievements: business.achievements,
			token: generateToken(business._id),
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
};

const getProfile = async (req, res) => {
	const business = await Business.findById(req.business._id);

	if (business) {
		res.json({
			_id: business._id,
			name: business.name,
			email: business.email,
			age: business.age,
			location: business.location,
			coins: business.coins,
			achievements: business.achievements,
		});
	} else {
		res.status(404);
		throw new Error("Business not found");
	}
};

const updateProfile = async (req, res) => {
	const business = await Business.findById(req.body._id);

	if (req.body.email && req.body.email !== business.email) {
		const emailBusiness = await Business.findOne({ email: req.body.email });

		if (emailBusiness) {
			res.status(400);
			throw new Error("Business with this email address already exists");
		}
	}

	if (business) {
		business.name = req.body.name || business.name;
		business.email = req.body.email || business.email;
		business.password = req.body.password || business.password;
		business.age = req.body.age || business.age;
		business.location = req.body.location || business.location;
		business.coins = req.body.coins || business.coins;
		business.achievements = req.body.achievements || business.achievements;

		const updatedBusiness = await business.save();

		res.json({
			_id: updatedBusiness._id,
			name: updatedBusiness.name,
			email: updatedBusiness.email,
			age: updatedBusiness.age,
			location: updatedBusiness.location,
			coins: updatedBusiness.coins,
			achievements: updatedBusiness.achievements,
			token: generateToken(updatedBusiness._id),
		});
	} else {
		res.status(404);
		throw new Error("Business not found");
	}
};

/* -------------------------------------------------------------------------- */

module.exports = { addBusiness, authBusiness, getProfile, updateProfile };
