if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const path = require("path");

/* -------------------------------------------------------------------------- */

const connectDB = require("./config/database");
connectDB();

/* -------------------------------------------------------------------------- */

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

/* -------------------------------------------------------------------------- */

const userRoutes = require("./routes/user");
const businessRoutes = require("./routes/business");
const challengeRoutes = require("./routes/challenges");

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/businesses", businessRoutes);
app.use("/api/challenges", challengeRoutes);

app.all("*", (req, res, next) => {
	const err = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(err);
});

app.use((err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === "production" ? null : err.stack,
	});
});

/* -------------------------------------------------------------------------- */

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
	console.log(`Bizup is listening on port ${Port}`);
});
