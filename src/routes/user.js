const { Router } = require('express');
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/user_controller');
const User = require('../app/models/user');

router.post('/register', userController.register);

module.exports = router;
