import Joi from "joi";

const isValidSignUp = Joi.object({
  full_name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(11).max(11).required(),
  password: Joi.string().required(),
});

export const signUpValidation = (req, res, next) => {
  const validation = isValidSignUp.validate(req.body);
  if (validation.error) {
    return res
      .status(400)
      .json({ error: validation.error.details.map((error) => error.message.replace(/"/g, "")) });
  }
  next();
};
