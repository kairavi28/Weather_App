const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('./controller');

router.get('/users', getUsers);
router.post('/create', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;