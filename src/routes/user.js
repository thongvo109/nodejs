const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/user_controller');
const { requireLogin } = require('../app/middleware/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', requireLogin, userController.index);

module.exports = router;
