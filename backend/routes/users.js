const router = require('express').Router();
const { validateUserId, validateAvatar, validateUser } = require('../middlewares/validate');
const {
  getUsers, getUserById, updateAvatar, updateUser, getCurrentUser,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.get('/', getUsers);
router.get('/:id', validateUserId, getUserById);
router.patch('/me', validateUser, updateUser);
router.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
