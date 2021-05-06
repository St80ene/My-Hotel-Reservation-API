import ReservationController from "../../controllers/reservationController";

import express from "express";

const reservationRoute = express.Router();
const reservation = new ReservationController();

reservationRoute.post("/", reservation.create);

reservationRoute.get("/", reservation.get);

reservationRoute.get("/:id", reservation.getById);

reservationRoute.put("/:id", reservation.update);

reservationRoute.delete("/:id", reservation.delete);

export default reservationRoute;
reservation