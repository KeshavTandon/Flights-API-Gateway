const express = require("express");
const { UserController } = require("../../controllers");
const {validateAuthRequest} =require('../../middlewares/Auth-middleware')
const router = express.Router();

router.post("/signup",validateAuthRequest, UserController.userSignup);
router.post("/signin",validateAuthRequest,UserController.userSignIn);

module.exports=router;
