// const Joi = require("joi");
import Joi from "joi";
// import hotelModel from '../models/hotelModel'

const isValidHotel = Joi.object({
  name: Joi.string().min(3).required(),

  address: Joi.string().min(3).required(),

  rooms: Joi.number().integer().min(1).required(),
});

export const hotelValidation = (req, res, next) => {
  const validation = isValidHotel.validate(req.body);
  if (validation.error) {
    res.status(400).json({ error: validation.error });
  }
  next();
}

