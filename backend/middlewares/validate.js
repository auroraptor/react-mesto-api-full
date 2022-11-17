const { celebrate, Joi } = require('celebrate');
const { url } = require('../utils/regexps');

module.exports.validateUserBody = (req, res, next) => {
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(url),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  });
  next();
};

module.exports.validateAuth = (req, res, next) => {
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  });
  next();
};
