const catchAsync = require("../utils/catchAsync");

const Challenge = require("../models/challengeModel");

/* -------------------------------------------------------------------------- */

const isHost = catchAsync(async (req, res, next) => {
	const params = req.params;
	if (params.id) {
		const challenge = await Challenge.findById(params.id);

		if (challenge && req.business && req.business._id === challenge.host) {
			next();
		}
	}
	res.status(404);
	throw new Error("No challenge found");
});

/* -------------------------------------------------------------------------- */

module.exports = isHost;
