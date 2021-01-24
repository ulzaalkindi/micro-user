const express = require('express');
const router = express.Router();
const usersHandler = require('./handler/users');
/* GET users listing. */
router.post('/register',usersHandler.register);
router.post('/login',usersHandler.login);
router.put('/:id',usersHandler.update);
router.get('/:id', usersHandler.getUser);
router.get('/', usersHandler.getUsers);
router.post('/logout', usersHandler.logout);

module.exports = router;
