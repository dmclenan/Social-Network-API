const router = require('express').Router();
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,

} = require('../../controllers/usersController.js');

// /api/users
router.route('/').get(getAllUsers).post(createUsers);

// /api/users/:userId
router.route('/:id').get(getUsersById);

module.exports = router;