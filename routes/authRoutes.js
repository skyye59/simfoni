const express = require("express");
const authController = require("../controllers/authController");

const router = new express.Router();

router.post("/signup", authController.signup_post);
router.post("/login", authController.login_post);
router.post("/logout", () => {});

module.exports = router;
