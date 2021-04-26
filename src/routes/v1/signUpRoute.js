import signUpController from "../../controllers/signUpController";
import { signUpValidation } from "../../middleware/signUpMiddleware";
import express from "express";

const signUpRouter = express.Router();
const signUp = new signUpController();

/**
 * @api {post} /api/v1/sign-up/ Create a new User
 * @apiName POST
 * @apiGroup User
 *
 * @apiParam {String} full_name User's Full name
 * @apiParam {String} email User's Email
 * @apiParam {String} phone User's Phone number
 * @apiParam {String} password User's Password
 *
 * @apiSuccess {String} Message user created...
 *
 * @apiError {String} Error 400 User already exists!!
 */
signUpRouter.post("/", signUpValidation, signUp.create);


export default signUpRouter;
