const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const validateUserPassword = require('../middleware/validateUserPassword');

router.post('/', validateUserPassword, userController.createUser);

module.exports = router;