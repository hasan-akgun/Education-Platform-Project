const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const validateUserPassword = require('../middleware/validateUserPassword');
const authController = require('../controller/authController')

router.post('/', validateUserPassword, userController.createUser);

router.get('/', authController.login);



module.exports = router;