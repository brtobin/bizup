const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const isBusiness = require("../middleware/businessAuthMiddleware");
const isHost = require("../middleware/businessHostMiddleware");

const control = require("../controllers/challengeControllers");

/* -------------------------------------------------------------------------- */

router.post("/", isBusiness, catchAsync(control.addChallenge));

router.get("/:id", catchAsync(control.getChallenge));

router.put("/:id", isBusiness, catchAsync(control.updateChallenge));

router.delete("/:id", isBusiness, isHost, catchAsync(control.deleteChallenge));

/* -------------------------------------------------------------------------- */

module.exports = router;
