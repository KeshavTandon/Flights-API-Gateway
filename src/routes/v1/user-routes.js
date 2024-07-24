const express = require("express");
const { UserController } = require("../../controllers");
const {
  validateAuthRequest,
  checkAuth,
  isAdmin,
} = require("../../middlewares/Auth-middleware");
const router = express.Router();

router.post("/signup", validateAuthRequest, UserController.userSignup);
router.post("/signin", validateAuthRequest, UserController.userSignIn);
router.post("/role", checkAuth, isAdmin, UserController.addRoleToUser);

module.exports = router;
