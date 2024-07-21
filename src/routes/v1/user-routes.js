const express = require("express");
const { UserController } = require("../../controllers");
const router = express.Router();

router.post("/signup", UserController.userSignup);
router.post("/signin", UserController.userSignIn);

module.exports=router;
