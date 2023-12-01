const express = require("express")
const router = express.Router()
const { register } = require("../controller/Auth");
const { login } = require("../controller/Auth");

router.route("/register").post(register)

router.route("/login").post(login);
module.exports = router;