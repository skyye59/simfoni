const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

// Create the app
const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// Set the view engine for the app
app.set("view engine", "ejs");

// Database connection
const dbURI =
  "mongodb+srv://admin:admin@simfonicluster.91e1d.mongodb.net/simfoniDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("index"));
app.get("/home", requireAuth, (req, res) => res.render("home"));
app.use(authRoutes);
