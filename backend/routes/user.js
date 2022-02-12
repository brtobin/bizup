const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const isAuth = require("../middleware/authMiddleware");

const control = require("../controllers/userControllers");

/* -------------------------------------------------------------------------- */

router.post("/", catchAsync(control.addUser));

router.post("/login", catchAsync(control.authUser));

router.get("/profile", catchAsync(control.getProfile));

router.put("/profile", catchAsync(control.updateProfile));

/* -------------------------------------------------------------------------- */

module.exports = router;
