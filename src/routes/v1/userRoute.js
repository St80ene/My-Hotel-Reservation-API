import userController from "../../controllers/userController";
import express from "express";

const userRouter = express.Router();
const user = new userController();

/**
 * Endpoint to get list of users
 */
userRouter.get('/', user.get);

/**
 * Endpoint for getting a user by Id
 * @param {string} id - The id of the user.
 */
userRouter.get("/:id", user.getById);

/**
 * Endpoint for updating a user's detail
 * @param {string} id - The id of the user.
 * @returns {string} - Update successful
 * @throws 500 - Internal server error
 */
userRouter.put('/:id', user.update);

/**
 * Endpoint to delete a user by Id
 * @param {string} id - The id of the user.
 * @returns {string} - Update successful
 * @throws 500 - Internal server error
*/
userRouter.delete('/:id', user.delete)


export default userRouter;