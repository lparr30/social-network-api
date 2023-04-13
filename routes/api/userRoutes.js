const router = require('express').Router();

const { createUser, getUsers, getOneUser } = require('../../controllers/userController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getOneUser);

module.exports = router;