const express = require("express");
const { UserController } = require("../../controllers");
const router = express.Router();

router.post("/", UserController);

module.exports=router;
