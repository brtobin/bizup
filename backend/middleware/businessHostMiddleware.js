const catchAsync = require("../utils/catchAsync");

const Challenge = require("../models/challengeModel");
const Business = require("../models/businessModel");

/* -------------------------------------------------------------------------- */

const isHost = catchAsync(async (req, res, next) => {
	const params = req.params;
	if (params.id) {
		const challenge = await Challenge.findById(params.id).populate("host");
		if (challenge && req.business && req.business.email === challenge.host.email) {
			next();
		}
	} else {
		res.status(404);
		throw new Error("No challenge found");
	}
});

/* -------------------------------------------------------------------------- */

module.exports = isHost;
