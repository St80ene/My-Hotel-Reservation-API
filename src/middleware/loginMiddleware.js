import Joi from 'joi';

const isValidLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const loginValidation = (req, res, next) => {
  const validation = isValidLogin.validate(req.body);
  if (validation.error) {
    res.status(400).json({ error: validation.error });
  }
  next();
};