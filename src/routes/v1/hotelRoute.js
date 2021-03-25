import Hotel from "../../controllers/hotelController";
import { hotelValidation } from "../../middleware/hotelMiddleware";
import express from "express";

const hotelRouter = express.Router();
const hotel = new Hotel();

hotelRouter.get("/api/hotel-reservation/", hotel.getHotel);

hotelRouter.get("/api/hotel-reservation/:id", hotel.getHotelById);

hotelRouter.post("/api/hotel-reservation/", hotelValidation, hotel.createHotel);


export default hotelRouter;
