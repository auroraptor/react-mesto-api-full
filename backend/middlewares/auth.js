const jwt = require('jsonwebtoken');
const { logNow } = require('../utils/log');
const { HTTP401Error } = require('../errors/HTTP401Error');

module.exports = (req, res, next) => {
  let payload;
  try {
    // eslint-disable-next-line no-undef
    logNow(req.cookies);
    const token = req.cookies.jwt;
    payload = jwt.verify(token, '🔐');
  } catch (err) {
    next(new HTTP401Error('Необходима авторизация'));
    return;
  }
  req.user = payload;
  next();
};
