import Joi from "joi";

const isValidHotel = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(11).max(11).required(),
  password: Joi.string().min(3).required(),
});

export const hotelValidation = (req, res, next) => {
  const validation = isValidHotel.validate(req.body);
  if (validation.error) {
    res
      .status(400)
      .json({ error: validation.error.details.map((error) => error.message.replace(/"/g, "")) });
  }
  next();
}

