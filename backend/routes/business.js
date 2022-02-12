const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const isAuth = require("../middleware/authMiddleware");

const control = require("../controllers/businessControllers");

/* -------------------------------------------------------------------------- */

router.post("/", catchAsync(control.addBusiness));

router.post("/login", catchAsync(control.authBusiness));

router.get("/profile", isAuth, catchAsync(control.getProfile));

router.put("/profile", isAuth, catchAsync(control.updateProfile));

/* -------------------------------------------------------------------------- */

module.exports = router;
