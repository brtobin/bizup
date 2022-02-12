const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const isBusiness = require("../middleware/businessAuthMiddleware");

const control = require("../controllers/businessControllers");

/* -------------------------------------------------------------------------- */

router.post("/", catchAsync(control.addBusiness));

router.post("/login", catchAsync(control.authBusiness));

router.get("/profile", isBusiness, catchAsync(control.getProfile));

router.put("/profile", isBusiness, catchAsync(control.updateProfile));

/* -------------------------------------------------------------------------- */

module.exports = router;
