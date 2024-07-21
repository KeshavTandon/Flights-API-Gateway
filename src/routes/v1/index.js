const express = require("express");

const { InfoController, UserController } = require("../../controllers");
const userRouter=require('./user-routes');
const router = express.Router();

router.get("/info", InfoController.info);
router.use("/user", userRouter);

module.exports = router;
