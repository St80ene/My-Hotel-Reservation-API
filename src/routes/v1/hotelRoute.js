import HotelController from "../../controllers/hotelController";
import { hotelValidation } from "../../middleware/hotelMiddleware";
import express from "express";


const hotelRouter = express.Router();
const hotel = new HotelController();

/**
 * @api {get} /api/v1/hotels/ Request List of Hotels
 * @apiName GET
 * @apiGroup Hotel
 * 
 * 
 * 
 * @apiSuccess {String} Name Name of Hotels
 * @apiSuccess {String} Address Addresses of each Hotels(Nested Object {State, city, street, number})
 * @apiSuccess {Array} Rooms Rooms in each Hotel(Array of Strings)
 * @apiSuccess {String} Rating Ratings of each Hotel
 * 
 * @apiError {String} Error 404 Not Found.
 */
hotelRouter.get("/", hotel.get);


/**
 * @api {get} /api/v1/hotels/:id Request an existing Hotel By ID
 * @apiParam {String} id Hotel unique ID
 * 
 * @apiName GET
 * @apiGroup Hotel
 * 
 * 
 * @apiSuccess {String} Name Name of the Hotel
 * @apiSuccess {Object} Address Address of the Hotels(Nested Object {State, city, street, number})
 * @apiSuccess {Array} Rooms Rooms in the Hotel(Array of Strings)
 * @apiSuccess {String} Rating Rating of the Hotel
 * 
 * @apiError Error 404 Not Found
 * @apiError NotFound The <code>id</code> of this Hotel was not found.
 */
hotelRouter.get("/:id", hotel.getById);

/**
 * @api {post} /api/v1/hotels/ Create a new Hotel
 * @apiName POST
 * @apiGroup Hotel
 * 
 * @apiParam {String} Name Name of the Hotel
 * @apiParam {Object} Address Address of the Hotels
 * @apiParam {String} Rooms Rooms in the Hotel
 * @apiParam {String} Rating Rating of the Hotel
 * 
 * @apiSuccess {String} Name Name of the Hotel
 * @apiSuccess {String} Address Address of the Hotels
 * @apiSuccess {Array} Rooms Rooms in the Hotel
 * @apiSuccess {String} Rating Rating of the Hotel
 * 
 * @apiError {String} Error 404 Not Found.
 */
hotelRouter.post("/", hotelValidation, hotel.create);

/**
 * @api {put} /api/v1/hotels/:id Update an existing Hotel
 * @apiName PUT
 * @apiGroup Hotel
 * 
 * @apiParam {String} id Unique ID of the Hotel
 * @apiParam {String} Name Name of the Hotel
 * @apiParam {Object} Address Address of the Hotels
 * @apiParam {Object} Rooms Rooms in the Hotel
 * @apiParam {String} Rating Rating of the Hotel
 * 
 * @apiSuccess {String} Name Name of the Hotel
 * @apiSuccess {String} Address Address of the Hotels
 * @apiSuccess {Array} Rooms Rooms in the Hotel
 * @apiSuccess {String} Rating Rating of the Hotel
 * 
 * @apiError NotFound The <code>id</code> of this Hotel was not found.
 */
hotelRouter.put("/:id", hotel.update);

/**
 * @api {delete} /api/v1/hotels/ Delete an existing Hotel
 * @apiName DELETE
 * @apiGroup Hotel
 * 
 * @apiParam {String} id Unique ID of the Hotel
 * 
 * @apiSuccess {String} Delete successful
 * 
 * @apiError NotFound The <code>id</code> of this Hotel was not found.
 */
hotelRouter.delete("/:id", hotel.delete);

export default hotelRouter;
