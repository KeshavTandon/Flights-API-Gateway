const { UserService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function userSignup(req, res) {
  try {
    const user = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });

    SuccessResponse.data = user;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  userSignup,
};
