const express = require("express");

const { InfoController, UserController } = require("../../controllers");

const router = express.Router();

router.get("/info", InfoController.info);
router.use("/signup", UserController.userSignup);

module.exports = router;
