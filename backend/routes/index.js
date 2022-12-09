const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const auth = require('../middlewares/auth');
const { validateUserBody, validateAuth } = require('../middlewares/validate');
const { login, createUser } = require('../controllers/users');
const { HTTP404Error } = require('../errors/HTTP404Error');

router.post('/signup', validateUserBody, createUser);
router.post('/signin', validateAuth, login);
router.use('/', auth);
router.use('/users', userRouter);
router.use('/cards', cardRouter);
router.post('/signout', (req, res) => {
  res.clearCookie('jwt').end();
});
router.use((req, res, next) => {
  next(new HTTP404Error(`По адресу ${req.baseUrl} ничего не нашлось`));
});

module.exports = router;
