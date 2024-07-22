const express = require("express");
const { checkAuth } = require("../../middlewares/Auth-middleware");
const { InfoController } = require("../../controllers");
const userRouter = require("./user-routes");
const router = express.Router();

router.get("/info", checkAuth, InfoController.info);
router.use("/user", userRouter);

module.exports = router;
