import Joi from "joi";

const isValidHotel = Joi.object({
  name: Joi.string().required(),

  address: {
    state: Joi.string().min(3).required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.number().integer().required(),
    rooms: Joi.number().integer().required(),
    rating: Joi.number().integer().required(),
  },

  rooms: Joi.number().integer().min(1).required(),

  rating: Joi.number().integer().required(),
});

export const hotelValidation = (req, res, next) => {
  const validation = isValidHotel.validate(req.body);
  if (validation.error) {
    res.status(400).json({ error: validation.error });
  }
  next();
}

