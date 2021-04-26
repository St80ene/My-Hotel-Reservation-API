import loginController from "../../controllers/loginController";
import { loginValidation } from "../../middleware/loginMiddleware";
import express from "express";

const loginRouter = express.Router();
const login = new loginController();



/**
 * @api {post} /api/v1/login/ Login a User
 * @apiName POST
 * @apiGroup User
 *
 * @apiParam {String} email User's Email
 * @apiParam {String} password User's Password
 *
 * @apiSuccess {String} Message token
 *
 * @apiError {String} Error 400 User does not exists!!
 */

loginRouter.post("/", loginValidation, login.validate);

export default loginRouter;