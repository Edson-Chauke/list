const express = require("express")
const router = express.Router()
const { login} = require("../controller/loginController");
const { register } = require("../controller/userController");

router.route("/loginr").post(login);
// router.route("/update").put(update);
router.route("/register").post(register);
module.exports = router